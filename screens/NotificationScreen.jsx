/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Flex, Text, Image, Divider, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const NotificationScreen = () => {
  const handleDismiss = () => {
    // Handle dismiss logic here
  };

  return (
    <>
      <Flex
        flex={1}
        flexDirection={'column'}
        marginVertical={10}
        marginHorizontal={10}
      >
        {/* Notification Items */}
        <Flex flexDirection="column" alignItems="flex-start" w="full">
          {/* Notification Item 1 */}
          <Flex
            marginBottom={3}
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="space-between"
            w="full"
          >
            <Flex flexDirection="row" alignItems="center">
              <Image
                source={require('../assets/images/logo.png')}
                style={{ width: 50, height: 50, borderRadius: 20 }}
              />
              {/* Notification Content */}
              <Box marginLeft={2} flex={1} >
                <Text fontSize="lg" fontWeight="bold">
                  New message
                </Text>
                <Text fontSize="lg">Hey, how's it going?</Text>
              </Box>
              <Text fontSize="md" color="gray">
                2 hours ago
              </Text>
            </Flex>
          </Flex>

          <Divider marginY={1} thickness={2} />

          {/* Notification Item 2 */}
          <Flex
            marginBottom={3}
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="space-between"
            w="full"
          >
            <Flex flexDirection="row" alignItems="center">
              <Image
                source={require('../assets/images/logo.png')}
                style={{ width: 50, height: 50, borderRadius: 20 }}
              />
              {/* Notification Content */}
              <Box marginLeft={2} flex={1}>
                <Text fontSize="lg" fontWeight="bold">
                  New friend
                </Text>
                <Text fontSize="lg">Accept or decline? </Text>
              </Box>
              <Text fontSize="md" color="gray">
              1 day ago
            </Text>
            </Flex>
          </Flex>

          <Divider marginY={1} thickness={2} />
        </Flex>
      </Flex>
    </>
  );
};

export default NotificationScreen;
