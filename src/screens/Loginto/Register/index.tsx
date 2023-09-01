import React, {FC} from 'react';
import {Formik} from 'formik';

import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import ButtonWithIcon from 'src/components/ButtonWithIcon';
import Input from 'src/components/Input';
import Text from 'src/components/Text';
import View from 'src/components/View';
import Button from 'src/components/Button';
import Heading from 'src/components/Heading';

const Register: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView style={{marginTop: 38, padding: 20}}>
        {/*  <VStack space={2} mx="8"> */}
        <Heading>Register account</Heading>
        <Text>Fill your details or continue with social media</Text>
        <RegisterDetails />
        {/*  </VStack> */}
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
        <Text>Already Have Account? Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

interface Props {
  navigation: any;
}

const RegisterDetails = () => {
  const handleChange = (value: string) => () => {};
  const handleBlur = (value: string) => () => {};

  return (
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <Input
              label="Nombre"
              placeholder="Enter your name"
              helperText="We will send you a confirmation email"
              type="text"
              errorMessage="Please enter a valid name"
              handleChange={undefined}
              handleBlur={undefined}
              values={undefined}
            />

            <Input
              label="Email"
              placeholder="Enter your email"
              helperText="We will send you a confirmation email"
              type="text"
              errorMessage="Please enter a valid email"
              handleChange={undefined}
              handleBlur={undefined}
              values={undefined}
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              helperText="Password must be at least 8 characters"
              type="password"
              errorMessage="Please enter a valid password"
              handleChange={undefined}
              handleBlur={undefined}
              values={undefined}
            />

            <Button onPress={handleSubmit}>Sign Up</Button>
            <ButtonWithIcon onPress={handleSubmit}>
              Sign Up With Google
            </ButtonWithIcon>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Register;
