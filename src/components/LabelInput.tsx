import React from 'react';
import View from './View';
import {Text} from 'react-native';

const LabelInput = ({label}: {label: string}) => {
  return (
    <Text
      style={{
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        marginTop: 15,
        lineHeight: 20,
        color: '#2B2B2B',
      }}>
      {label}
    </Text>
  );
};

export default LabelInput;
