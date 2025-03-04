import { LoginView } from 'components/LoginView';
import { createContext, ReactNode, useState } from 'react';

// This is the type of a state that holds a token string or undefined
type TokenContextType = [
  string | undefined,
  React.Dispatch<React.SetStateAction<string | undefined>>,
];

export const tokenContext = createContext<TokenContextType>([undefined, () => {}]);

export const TokenContextProvider = ({ children }: { children: ReactNode }) => {
  const state = useState<string | undefined>();
  return (
    <tokenContext.Provider value={state}>
      {state[0] ? children : <LoginView setToken={state[1]} />}
    </tokenContext.Provider>
  );
};
