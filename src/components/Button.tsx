import React, {FC} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

const Button: FC<ButtonOpacityProps> = ({onPress, children}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      
      style={{
        backgroundColor: '#86DFD0',
        padding: 16,
        marginVertical: 20,
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Raleway',
          fontWeight: '600',
          color: 'black',
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

interface ButtonOpacityProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export default Button;
