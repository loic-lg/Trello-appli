import { User } from 'api_Routes/User';
import { useTrelloApi } from 'hooks/useTrelloApi';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { Text } from 'react-native';

export const userContext = createContext<
  [User | undefined, React.Dispatch<React.SetStateAction<User | undefined>>]
>([undefined, () => {}]);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const state = useState<User | undefined>();
  const api = useTrelloApi();

  useEffect(() => {
    api.callTrelloApi('get_member', 'me').then((response) => {
      if (response.error) {
        console.error(response.error);
      } else {
        state[1](response.data);
      }
    });
  }, []);

  return (
    <userContext.Provider value={state}>
      {state[0] ? children : <Text>Loading...</Text>}
    </userContext.Provider>
  );
}
