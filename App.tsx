import React from 'react';
import {NativeBaseProvider} from 'native-base';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <NativeBaseProvider>
      <StackNavigator />
    </NativeBaseProvider>
  );
}
