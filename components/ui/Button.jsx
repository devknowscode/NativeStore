import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Box,
  Button,
  Flex,
  Icon,
  NativeBaseProvider,
  extendTheme,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AuthButton = ({hasSolid, iconName, text}) => {
  const myRef = React.useRef({});
  React.useEffect(() => {
    const styleObj = {
      borderRadius: 26,
    }; //@ts-ignore

    myRef.current.setNativeProps({
      style: styleObj,
    });
  });

  const textStyle = hasSolid ? styles.solidButton : styles.outlineButton;

  return (
    <Box w={'full'} h={50}>
      <Button
        variant={hasSolid ? 'solid' : 'outline'}
        ref={myRef}
        colorScheme={'blue'}
        _text={{...styles.textStyle, textStyle}}>
        {text}
      </Button>
      {iconName ? (
        <Box position={'absolute'} top={'25%'} left={7}>
          <Icon as={AntDesign} name={iconName} size={6} style={textStyle} />
        </Box>
      ) : null}
    </Box>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  solidButton: {
    color: 'white',
  },
  outlineButton: {
    color: 'black',
  },
});
