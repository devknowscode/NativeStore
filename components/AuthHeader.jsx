import React from 'react';
import {Box, Heading} from 'native-base';
import IconButton from './ui/IconButton';

const AuthHeader = () => {
  return (
    <Box w={'full'} h={50}>
      <Box h="full" justifyContent={'center'} alignItems={'center'}>
        <Heading size={'md'}>Sign In</Heading>
      </Box>
      <IconButton />
    </Box>
  );
};

export default AuthHeader;
