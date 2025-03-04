import { tokenContext } from 'contexts/TokenContextProvider';
import { useContext } from 'react';

export function useToken() {
  const context = useContext(tokenContext);
  if (!context) {
    throw new Error('useToken must be used within a TokenContextProvider');
  }
  const [token, setToken] = context;

  if (!token) {
    throw new Error('No token found in context');
  }

  return token;
}
