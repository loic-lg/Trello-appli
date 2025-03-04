import * as AuthSession from 'expo-auth-session';
import * as Linking from 'expo-linking';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import WebView from 'react-native-webview';

export function LoginView({ setToken }: { setToken: (token: string) => void }) {
  const key = process.env.EXPO_PUBLIC_API_KEY;
  const redirectUrl = AuthSession.makeRedirectUri();

  useEffect(() => {
    // Handle deep linking
    const subscription = Linking.addEventListener('url', (event) => {
      // Extract the fragment (everything after #)
      const hashPart = event.url.split('#')[1];
      if (hashPart) {
        // Create URLSearchParams from the fragment
        const params = new URLSearchParams(hashPart);
        const token = params.get('token');
        if (token) {
          console.log('Received token:', token);
          setToken(token);
        }
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://trello.com/1/authorize/?return_url=${redirectUrl}&key=${key}&scope=read,write&expiration=never&name=tdev&response_type=token`,
        }}
        onError={console.error}
      />
    </View>
  );
}
