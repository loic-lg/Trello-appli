import { userContext } from 'contexts/UserContextProvider';
import { useContext } from 'react';

export function useUser() {
  const context = useContext(userContext);
  if (!context) {
    throw new Error('useUser must be used within a UserContextProvider');
  }
  const [user, setUser] = context;

  if (!user) {
    throw new Error('No user found in context');
  }

  return user;
}
