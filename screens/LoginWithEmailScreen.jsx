import React from 'react';
import AuthButton from '../components/ui/Button';
import {Box, Divider, Flex, Heading, Input} from 'native-base';
import AuthHeader from '../components/AuthHeader';
  
const LoginWithEmailScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Flex
      flex={1}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      marginVertical={10}
      marginHorizontal={10}>
      <Box w="full" gap={5}>
        <AuthHeader headerText="Sign In" />
        <Box marginHorizontal={5} >
          <Heading size={'xl'} fontWeight={'semibold'}>
            Welcome
          </Heading>
        </Box>
      </Box>
      <Box
        w={'full'}
        flex={2}
        gap={2}
        flexDirection={'column'}
        justifyContent={'start'}
        alignItems={'center'}
        marginTop={7}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={{
            backgroundColor: '#f7f7f7',
            paddingLeft: 15,
            fontSize: 17,
          }}
          rounded={12}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          style={{
            backgroundColor: '#f7f7f7',
            paddingLeft: 15,
            fontSize: 17,
          }}
          rounded={12}
        />
        <AuthButton hasSolid onPress={handleLogin} text={'Login with Email'} />
        <Divider marginY={2} thickness={2} />
        <AuthButton text={'Text a temporary password'} />
        <AuthButton text={'Reset your password'} />
        <AuthButton text={'Create an account'} />
      </Box>
    </Flex>
  );
};

export default LoginWithEmailScreen;