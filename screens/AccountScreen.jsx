/* eslint-disable prettier/prettier */
import React from 'react';
import { Image } from 'react-native';
import { Box, Divider, Flex, Text, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import thư viện icon

const profileImage = require('../assets/images/logo.png');

const AccountScreen = () => {
  const handleProfileClick = () => {
  };

  return (
    <Flex
      flex={1}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      marginVertical={10}
      marginHorizontal={10}>

      <Box w="full" gap={5} alignItems="flex-start">
      <Button variant="unstyled" onPress={handleProfileClick}>
        <Image
          source={profileImage}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
      </Button>
      <Flex flexDirection="row" alignItems="center">
        <Text fontWeight="bold" fontSize="2xl">
          John Doe
        </Text>
        <Button
          variant="unstyled"
          onPress={handleProfileClick}
          flexDirection="row"
          alignItems="center"
        >
        <Icon name="user" size={20} color="gray" />
        </Button>
      </Flex>
    </Box>
    
      
      <Box
        w={'full'}
        flex={2}
        gap={2}
        flexDirection={'column'}
        justifyContent={'start'}
        alignItems={'flex-start'}
        marginTop={7}>
        <Text fontSize="xl">
          My eBay
        </Text>
        <Button variant="unstyled">
          <Flex flexDirection="row" alignItems="center" gap={4}>
            <Icon name="heart-o" size={20} color="black" />
            <Text fontSize="lg">Watchlist</Text>
          </Flex>
        </Button>
        <Button variant="unstyled">
          <Flex flexDirection="row" alignItems="center" gap={4}>
            <Icon name="bookmark-o" size={20} color="black" />
            <Text fontSize="lg">Saved</Text>
          </Flex>
        </Button>
        <Button variant="unstyled">
          <Flex flexDirection="row" alignItems="center" gap={4}>
            <Icon name="refresh" size={20} color="black" />
            <Text fontSize="lg">Buy again</Text>
          </Flex>
        </Button>
        <Button variant="unstyled">
          <Flex flexDirection="row" alignItems="center" gap={4}>
            <Icon name="credit-card" size={20} color="black" />
            <Text fontSize="lg">Purchases</Text>
          </Flex>
        </Button>
        <Button variant="unstyled">
          <Flex flexDirection="row" alignItems="center" gap={4}>
            <Icon name="gavel" size={20} color="black" />
            <Text fontSize="lg">Bids and offers</Text>
          </Flex>
        </Button>
        <Button variant="unstyled">
          <Flex flexDirection="row" alignItems="center" gap={4}>
            <Icon name="history" size={20} color="black" />
            <Text fontSize="lg">Recently viewed</Text>
          </Flex>
        </Button>
        <Button variant="unstyled">
          <Flex flexDirection="row" alignItems="center" gap={4}>
            <Icon name="tag" size={20} color="black" />
            <Text fontSize="lg">Selling</Text>
          </Flex>
        </Button>
        <Divider marginY={2} thickness={2} />
        <Button variant="unstyled">
          <Flex flexDirection="row" alignItems="center" gap={4}>
            <Icon name="folder-o" size={20} color="black" />
            <Text fontSize="lg">Categories</Text>
          </Flex>
        </Button>
        <Button variant="unstyled">
          <Flex flexDirection="row" alignItems="center" gap={4}>
            <Icon name="lightbulb-o" size={20} color="black" />
            <Text fontSize="lg"> Deals</Text>
          </Flex>
        </Button>
        <Button variant="unstyled">
          <Flex flexDirection="row" alignItems="center" gap={4}>
            <Icon name="cog" size={20} color="black" />
            <Text fontSize="lg">Settings</Text>
          </Flex>
        </Button>
        <Button variant="unstyled">
          <Flex flexDirection="row" alignItems="center" gap={4}>
            <Icon name="question-circle-o" size={20} color="black" />
            <Text fontSize="lg">Help</Text>
          </Flex>
        </Button>
      </Box>
    </Flex>
  );
};

export default AccountScreen;
