import {Formik} from 'formik';
import React, {FC, useState} from 'react';

import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import Text from 'src/components/Text';
import View from 'src/components/View';

import Heading from 'src/components/Heading';
import MailIcon from 'src/components/Icons/MailIcon';
const ForgotPassword: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView style={{marginTop: 38, padding: 20}}>
        <Heading>Forgot Password</Heading>
        <Text>Enter your Email account to reset your password</Text>
        <RecoveryDetails navigation={navigation} />
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>New User? Create Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

interface Props {
  navigation: any;
}

const RecoveryDetails = (props: any) => {
  const [showModal, setShowModal] = useState(false);

  const handleChange = (value: string) => () => {};
  const handleBlur = (value: string) => () => {};

  const handleReset = () => {};

  const onClose = () => {
    setShowModal(false);
    props.navigation.navigate('OTPVerification');
  };

  return (
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <Input
              label="Email"
              placeholder="Enter your email"
              helperText="We will send you a email to reset your password"
              type="text"
              errorMessage="Please enter a valid email"
              handleChange={undefined}
              handleBlur={undefined}
              values={undefined}
            />
            <Button onPress={handleReset}>Reset password</Button>
          </>
        )}
      </Formik>
      <ModalSentSuccess isOpen={showModal} onClose={onClose} />
    </View>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalSentSuccess: FC<ModalProps> = ({isOpen, onClose}) => {
  return (
    <></>
    /*  <Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content px={'4'} py={'3'}>
          <MailIcon color={'#0D6EFD'} />
          <Text textAlign={'center'} py={2}>
            Check your email
          </Text>
          <Text textAlign={'center'} mb={3} fontWeight={100} fontSize={12}>
            We have sent you an email with instructions to reset your password
          </Text>
          <Button onPress={onClose}>Close</Button>
        </Modal.Content>
      </Modal>
    </Center> */
  );
};

export default ForgotPassword;
