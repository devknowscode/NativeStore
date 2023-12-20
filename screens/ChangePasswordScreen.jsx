import React from 'react';
import AuthButton from '../components/ui/Button';
import { Box, Divider, Flex, Heading, Input } from 'native-base';
import AuthHeader from '../components/AuthHeader';

const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('');

  const handleChangePassword = () => {
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmNewPassword);
    // Add logic to handle password change
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
        <AuthHeader headerText="Change Password" />
        <Box marginHorizontal={5}>
          <Heading size={'xl'} fontWeight={'semibold'}>
            Update Your Password
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
          placeholder="Old Password"
          secureTextEntry
          value={oldPassword}
          onChangeText={(text) => setOldPassword(text)}
          style={{
            backgroundColor: '#f7f7f7',
            paddingLeft: 15,
            fontSize: 17,
          }}
          rounded={12}
        />
        <Input
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          style={{
            backgroundColor: '#f7f7f7',
            paddingLeft: 15,
            fontSize: 17,
          }}
          rounded={12}
        />
        <Input
          placeholder="Confirm New Password"
          secureTextEntry
          value={confirmNewPassword}
          onChangeText={(text) => setConfirmNewPassword(text)}
          style={{
            backgroundColor: '#f7f7f7',
            paddingLeft: 15,
            fontSize: 17,
          }}
          rounded={12}
        />
        <AuthButton hasSolid onPress={handleChangePassword} text={'Change Password'} />
        <Divider marginY={2} thickness={2} />
        {/* Add any additional buttons or functionality as needed */}
      </Box>
    </Flex>
  );
};

export default ChangePasswordScreen;
