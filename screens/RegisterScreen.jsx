import React from 'react';
import AuthButton from '../components/ui/Button';
import { Box, Divider, Flex, Heading, Input } from 'native-base';
import AuthHeader from '../components/AuthHeader';

const RegisterScreen = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegister = () => {
    console.log('Name:', name);
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
        <AuthHeader headerText="Create Account" />
        <Box marginHorizontal={5}>
          <Heading size={'xl'} fontWeight={'semibold'}>
            Get Started
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
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={{
            backgroundColor: '#f7f7f7',
            paddingLeft: 15,
            fontSize: 17,
          }}
          rounded={12}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
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
          onChangeText={(text) => setPassword(text)}
          style={{
            backgroundColor: '#f7f7f7',
            paddingLeft: 15,
            fontSize: 17,
          }}
          rounded={12}
        />
        <AuthButton hasSolid onPress={handleRegister} text={'Create Account'} />
        <Divider marginY={2} thickness={2} />
        <AuthButton text={'Login with Email'} />
        <AuthButton text={'Text a temporary password'} />
        <AuthButton text={'Reset your password'} />
      </Box>
    </Flex>
  );
};

export default RegisterScreen;
