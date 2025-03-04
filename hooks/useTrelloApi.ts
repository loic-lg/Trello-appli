import { useState, useCallback } from 'react';
import { useToken } from './useToken';
import { ApiAction, getRoutes } from '../api_Routes/apiRoutes';

export interface TrelloApiResponse {
  data: any;
  error?: string;
}

export function useTrelloApi() {
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
  const API_TOKEN = useToken();
  const BASE_URL = 'https://api.trello.com/1';
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const callTrelloApi = useCallback(
    async (
      action: ApiAction,
      id?: string,
      idMember?: string,
      extraData?: Record<string, any>
    ): Promise<TrelloApiResponse> => {
      setLoading(true);
      setError(null);

      const routes = getRoutes(id, idMember);

      if (!routes[action]) {
        const errorMsg = 'Action inconnue';
        setError(errorMsg);
        setLoading(false);
        return { error: errorMsg, data: null };
      }

      const { method, endpoint } = routes[action];
      const url = new URL(`${BASE_URL}${endpoint}`);

      url.searchParams.append('key', API_KEY);
      url.searchParams.append('token', API_TOKEN);

      console.log('url', url.toString());

      // paramètres supplémentaires pour GET et DELETE
      if ((method === 'GET' || method === 'DELETE') && extraData) {
        Object.entries(extraData).forEach(([key, value]) => {
          url.searchParams.append(key, String(value));
        });
      }

      try {
        const response = await fetch(url.toString(), {
          method,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          // corps de la requête pour POST et PUT
          body:
            (method === 'POST' || method === 'PUT') && extraData
              ? JSON.stringify(extraData)
              : undefined,
        });

        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
        return { data: result };
      } catch (err: any) {
        const errorMsg = err.message;
        setError(errorMsg);
        return { error: errorMsg, data: null };
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { callTrelloApi, data, loading, error };
}
