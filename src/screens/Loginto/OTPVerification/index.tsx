import {Formik} from 'formik';
import {Center, FormControl, Heading, VStack, Box} from 'native-base';
import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Button from 'src/components/Button';
import OTPInput from 'src/components/OTPInput';
import Text from 'src/components/Text';
import View from 'src/components/View';

const OTPVerification: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView style={{marginTop: 38}}>
        <VStack space={2} mx="8">
          <Heading textAlign={'center'}>OTP Verification</Heading>
          <Text textAlign={'center'}>
            Please check your email to see the verification code
          </Text>
          <Text w={300}>OTP code</Text>
          <OTPDetails navigation={navigation} />
          <TimeOutSent />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

interface Props {
  navigation: any;
}

const OTPDetails = (props: any) => {
  const [showModal, setShowModal] = useState(false);

  const handleChange = (value: string) => () => {};
  const handleBlur = (value: string) => () => {};

  const handleReset = () => {
    /* setShowModal(true); */
    props.navigation.navigate('HomeNavigator')
  };

  const onClose = () => {
    /* setShowModal(false);
    props.navigation.navigate('Home'); */
  };

  return (
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <FormControl isRequired>
            <Center mb={'2'}>
              <OTPInput pinCount={4} />
            </Center>

            <Button onPress={handleReset}>Verify</Button>
          </FormControl>
        )}
      </Formik>
      {/* <ModalSentSuccess isOpen={showModal} onClose={onClose} /> */}
    </View>
  );
};

const TimeOutSent = (props: any) => {
  const [delay, setDelay] = useState(60);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  if (minutes === 0 && seconds === 0) {
    console.log('Time out');
  }

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Text fontWeight={100}>Resend code to</Text>
      <Text fontWeight={100}>
        {minutes < 10 ? `0${minutes}` : minutes }{":"}{seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    </Box>
  );
};

export default OTPVerification;
