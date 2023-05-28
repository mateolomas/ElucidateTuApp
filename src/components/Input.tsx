import {FormControl, WarningOutlineIcon} from 'native-base';
import {Box, Input as InputNB} from 'native-base';
import React, {FC} from 'react';

const Input: FC<Props> = props => {
  return (
    <Box>
      <FormControl.Label>{props.label}</FormControl.Label>
      <InputNB
        {...props}
        backgroundColor="#F7F7F9"
        type={props.type}
        borderRadius={14}
        defaultValue="12345"
        placeholder={props.placeholder}
      />
      <FormControl.HelperText>{props.helperText}</FormControl.HelperText>
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {props.errorMessage}
      </FormControl.ErrorMessage>
    </Box>
  );
};

interface Props extends React.ComponentProps<typeof InputNB> {
  label: string;
  placeholder: string;
  helperText: string;
  type: "text" | "password";
  errorMessage: string;
}

export default Input;
