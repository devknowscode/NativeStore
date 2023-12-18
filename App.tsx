import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  const theme = extendTheme({});

  return (
    <NativeBaseProvider theme={theme}>
      <StackNavigator />
    </NativeBaseProvider>
  );
}
