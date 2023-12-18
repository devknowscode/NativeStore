import React from 'react';
import {IconButton as IconButtons, Icon} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';

const IconButton = () => {
  return (
    <IconButtons
      icon={<Icon as={Entypo} name={'chevron-left'} size={7} color={'#333'} />}
      borderRadius={'full'}
      position={'absolute'}
      top={0}
      left={0}
      background={'#f3f3f3'}
    />
  );
};

export default IconButton;
