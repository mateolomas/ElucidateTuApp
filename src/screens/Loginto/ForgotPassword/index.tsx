import React, {FC, useState} from 'react';
import {Formik} from 'formik';
import {Center, FormControl, Heading, Stack, VStack} from 'native-base';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import ButtonWithIcon from 'src/components/ButtonWithIcon';
import Input from 'src/components/Input';
import Text from 'src/components/Text';
import View from 'src/components/View';
import Button from 'src/components/Button';
import {Modal} from 'native-base';
import {Box} from 'native-base';
import MailIcon from 'src/components/Icons/MailIcon';
const ForgotPassword: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView style={{marginTop: 38}}>
        <VStack space={2} mx="8">
          <Heading textAlign={'center'}>Forgot Password</Heading>
          <Text w={300} textAlign={'center'}>
            Enter your Email account to reset your password
          </Text>
          <RecoveryDetails navigation={navigation} />
        </VStack>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text textAlign={'center'} marginBottom={8}>
          New User? Create Account
        </Text>
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

  const handleReset = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <FormControl isRequired>
            <Stack space={3} mb={'8'}>
              <Input
                label="Email"
                placeholder="Enter your email"
                helperText="We will send you a email to reset your password"
                type="text"
                errorMessage="Please enter a valid email"
              />
            </Stack>

            <Button onPress={handleReset}>Reset password</Button>
          </FormControl>
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
    <Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content px={'4'} py={'3'}>
          <MailIcon
            color={'#0D6EFD'}
          />
          <Text textAlign={'center'} py={2}>
            Check your email
          </Text>
          <Text textAlign={'center'} mb={3} fontWeight={100} fontSize={12}>
            We have sent you an email with instructions to reset your password
          </Text>
          <Button onPress={onClose}>Close</Button>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default ForgotPassword;
