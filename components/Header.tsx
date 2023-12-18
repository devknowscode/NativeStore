import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useState} from 'react';
import {
  Box,
  Flex,
  Input,
  Center,
  IconButton,
  Text,
  Circle,
  Spacer,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {StyleSheet} from 'react-native';

const Header = () => {
  const [isFocusableSearch, setIsFocusableSearch] = useState(false);
  return (
    <SafeAreaView style={style.headerContainer}>
      <Flex justifyContent="center" alignItems="center">
        <Center h={12}>
          <Text fontSize={20} fontWeight="bold">
            Home
          </Text>
        </Center>
        <Spacer size="2" />
        <Box
          flexDirection="row"
          justifyContent="center"
          borderRadius={20}
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
      </Flex>
      <IconButton
        icon={
          <Circle backgroundColor="#f7f7f7" size="sm">
            <FontAwesome5 name="shopping-cart" size={18} color="#41414f" />
          </Circle>
        }
        position={'absolute'}
        right={0}
        top={0}
        zIndex={2}
        onPress={() => console.log('Cart Pressed')}
      />
    </SafeAreaView>
  );
};

export default Header;

const style = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#e0e0e0',
  },
});
