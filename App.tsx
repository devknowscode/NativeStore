import React from 'react';
import {NativeBaseProvider, Text, Box} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Welcome to React Native</Text>
      </Box>
    </NativeBaseProvider>
  );
}
