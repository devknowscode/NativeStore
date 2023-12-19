import React, {useState} from 'react';
import {Box, Flex, Input, IconButton, Text, VStack} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = () => {
  const [isFocusableSearch, setIsFocusableSearch] = useState(false);
  return (
    <VStack space={2} justifyContent="center" alignItems="center">
      {/* Logo with Cart */}
      <Box w="full" minH={42}>
        <Box flex={1} justifyContent="center">
          <Text textAlign="center" fontSize={20} fontWeight="bold">
            Home
          </Text>
        </Box>
        <IconButton
          icon={<FontAwesome5 name="shopping-cart" size={20} color="#41414f" />}
          background="#f7f7f7"
          borderWidth={1}
          borderColor="coolGray.100"
          rounded={'full'}
          position="absolute"
          right={0}
          zIndex={1}
          onPress={() => console.log('Cart Pressed')}
        />
      </Box>
      {/* Searching */}
      <Box
        borderWidth={1}
        borderColor={'coolGray.100'}
        w="full"
        flexDirection="row"
        justifyContent="center"
        borderRadius="full"
        paddingX={3}
        backgroundColor="#f7f7f7">
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Box>
            <FontAwesome name="search" size={20} color="#41413f" />
          </Box>
          <Input
            w={'85%'}
            fontSize={14}
            fontWeight={'bold'}
            variant={'unstyled'}
            placeholder="Search for anything"
            onFocus={() => setIsFocusableSearch(true)}
            onBlur={() => setIsFocusableSearch(false)}
            placeholderTextColor={isFocusableSearch ? '#727272' : '#41413f'}
            color="#41413f"
          />
          <Box>
            <Entypo name="camera" size={20} color="#41413f" />
          </Box>
        </Flex>
      </Box>
    </VStack>
  );
};

export default Header;
