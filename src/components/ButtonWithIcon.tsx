
import React, {FC} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import GoogleIcon from './Icons/GoogleIcon';

const ButtonWithIcon: FC<ButtonOpacityProps> = ({onPress, children}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#ECECEC',
        padding: 9,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <GoogleIcon />
      <Text
        style={{
          fontFamily: 'Raleway',
          fontWeight: '600',
          color: '#2B2B2B',
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

interface ButtonOpacityProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export default ButtonWithIcon;
