import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, {FC} from 'react';
import { StyleSheet } from 'react-native';

const OTPInput: FC<Props> = (props) => {
  return (
    <OTPInputView
      style={{width: "100%", height: 100}}
      pinCount={props.pinCount}
      // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
      // onCodeChanged = {code => { this.setState({code})}}
      autoFocusOnLoad
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}
      onCodeFilled={code => {
        console.log(`Code is ${code}, you are good to go!`);
      }}
    />
  );
};

const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
    borderStyleHighLighted: {
      borderColor: "#F7F7F9",
    },
  
    underlineStyleBase: {
      width: 70,
      height: 60,
      color: "black",
      backgroundColor: '#F7F7F9',
      borderWidth: 0,
      padding: 10,
      margin: 8,
      borderBottomWidth: 3,
    },
  
    underlineStyleHighLighted: {
      borderColor: "#0D6EFD",
    },
  });

  
export default OTPInput;

interface Props {
    pinCount: number;

}
