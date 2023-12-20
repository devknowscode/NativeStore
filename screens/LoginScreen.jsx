import React from 'react';
import AuthButton from '../components/ui/Button';
import {Box, Divider, Flex, Heading, Spacer, Text} from 'native-base';
import AuthHeader from '../components/AuthHeader';

const LoginScreen = () => {
  return (
    <Flex
      flex={1}
      flexDirection={'column'}
      justifyContent={'space-between'}
      alignItems={'center'}
      marginVertical={10}
      marginHorizontal={10}>
      <Box w="full" flex={2} gap={5}>
        <AuthHeader headerText="Sign In" />
        <Box marginHorizontal={5}>
          <Heading size={'xl'} fontWeight={'semibold'}>
            Hello
          </Heading>
          <Spacer size={1} />
          <Text fontSize={16} color={'#444'} fontWeight={'semibold'}>
            You can use your email or username, or continue with your social
            account.
          </Text>
        </Box>
      </Box>
      <Box
        w={'full'}
        flex={1}
        gap={2}
        flexDirection={'column'}
        justifyContent={'flex-start'}>
        <AuthButton hasSolid text={'Use email or username'} />
        <Divider marginY={2} thickness={2} />
        <AuthButton iconName={'google'} text={'Sign in with Google'} />
        <AuthButton
          hasSolid
          iconName={'facebook-square'}
          text={'Sign in with Facebook'}
        />
        <AuthButton text={'Create a new account'} />
      </Box>
    </Flex>
  );
};

export default LoginScreen;
