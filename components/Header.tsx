import React, {useEffect, useRef, useState} from 'react';
import {
  VStack,
  HStack,
  Box,
  Flex,
  Input,
  IconButton,
  Text,
  Pressable,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

class Component {
  Home = () => {
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
            icon={
              <FontAwesome5 name="shopping-cart" size={20} color="#41414f" />
            }
            background="#f8f8f8"
            borderWidth={1}
            borderColor="coolGray.100"
            rounded="full"
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
          backgroundColor="#f8f8f8">
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center">
            <Box>
              <FontAwesome name="search" size={20} color="#41413f" />
            </Box>
            <Input
              w="85%"
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

  Search = () => {
    const [isFocusableSearch, setIsFocusableSearch] = useState(true);
    const inputRef = useRef<typeof Input>(null);

    useEffect(() => {
      if (inputRef.current && isFocusableSearch) {
        (inputRef.current as any)?.focus();
      }
      if (inputRef.current && !isFocusableSearch) {
        (inputRef.current as any)?.blur();
      }
    }, [isFocusableSearch]);

    const onFocus = () => {
      setIsFocusableSearch(true);
    };

    const onBlur = () => {
      setIsFocusableSearch(false);
    };

    const handleSubmit = () => {
      console.log('Searching...');
    };

    return (
      <HStack space={2} justifyContent="center" alignItems="center">
        {/* Searching */}
        <Box
          borderWidth={1}
          borderColor={'coolGray.100'}
          flex={1}
          borderRadius="full"
          paddingX={5}
          backgroundColor="#f8f8f8">
          <Input
            variant={'unstyled'}
            isFullWidth
            ref={inputRef}
            fontSize={14}
            fontWeight={'bold'}
            placeholder="Search for anything"
            focusable={isFocusableSearch}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholderTextColor={isFocusableSearch ? '#727272' : '#41413f'}
            onSubmitEditing={handleSubmit}
            InputLeftElement={
              <FontAwesome name="search" size={20} color="#41413f" />
            }
            InputRightElement={
              <Pressable onPress={() => console.log('use camera')}>
                <Entypo name="camera" size={20} color="#41413f" />
              </Pressable>
            }
          />
        </Box>
        <Box>
          {isFocusableSearch ? (
            <Text fontSize={16} color="#3665f3" bold onPress={onBlur}>
              Cancel
            </Text>
          ) : (
            <IconButton
              icon={
                <FontAwesome5 name="shopping-cart" size={20} color="#41414f" />
              }
              background="#f8f8f8"
              borderWidth={1}
              borderColor="coolGray.100"
              rounded="full"
              onPress={() => console.log('Cart Pressed')}
            />
          )}
        </Box>
      </HStack>
    );
  };
}

export default new Component();
