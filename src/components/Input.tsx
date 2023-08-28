import React, {FC} from 'react';
import {TextInput, View} from 'react-native';
import Text from './Text';
import LabelInput from './LabelInput';

const Input: FC<Props> = props => {
  return (
    <View>
      <LabelInput label={props.label} />
      <TextInput
        style={{
          backgroundColor: '#ECECEC',
          padding: 9,
          marginVertical: 10,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
        onChangeText={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values}
      />
      <Text
        style={{
          color: 'gray',
          fontSize: 12,
        }}>
        {props.helperText}
      </Text>
      <Text
        style={{
          color: 'red',
          fontSize: 12,
        }}>
        {props.errorMessage}
      </Text>
    </View>
  );
};

interface Props {
  label: string;
  handleChange: any;
  handleBlur: any;
  values: any;
  placeholder: string;
  helperText: string;
  type: 'text' | 'password';
  errorMessage: string;
}

export default Input;
