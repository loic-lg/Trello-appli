// App.tsx
import { BoardContainer } from 'components/BoardContainer';
import { styles } from 'components/Style';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import './global.css';
import { useURL } from 'expo-linking';
import { TokenContextProvider } from 'contexts/TokenContextProvider';
import { MainMenu } from 'components/menu/MainMenu';
import { UserContextProvider } from 'contexts/UserContextProvider';
import { BoardContextProvider } from 'contexts/BoardContextProvider';

export default function App() {
  const url = useURL();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TokenContextProvider>
        <UserContextProvider>
          <BoardContextProvider>
            <MainMenu>
              <BoardContainer />
            </MainMenu>
          </BoardContextProvider>
        </UserContextProvider>
      </TokenContextProvider>
    </GestureHandlerRootView>
  );
}
