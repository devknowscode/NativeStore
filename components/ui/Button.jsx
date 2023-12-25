import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Button, Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

class Component {
  AuthButton = ({hasSolid, iconName, text}) => {
    const textStyle = hasSolid ? styles.solidButton : styles.outlineButton;

    return (
      <Box w={'full'} h={50}>
        <Button
          variant={hasSolid ? 'solid' : 'outline'}
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
}

export default new Component();

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
