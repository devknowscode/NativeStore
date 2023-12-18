/* eslint-disable prettier/prettier */
import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  const theme = extendTheme({
    components: {
      Button: {
        variants: {
          default: ({colorScheme}) => {
            return {
              bg: `${colorScheme}.500`,
              rounded: 20,
            };
          },

          outline: ({colorScheme}) => {
            return {
              borderColor: `${colorScheme}.500`,
              rounded: 20,
            };
          },
        },
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <LoginScreen />
    </NativeBaseProvider>
  );
}
