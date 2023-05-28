import React, {FC} from 'react';
import {Formik} from 'formik';
import {FormControl, Heading, Stack, VStack} from 'native-base';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import ButtonWithIcon from 'src/components/ButtonWithIcon';
import Input from 'src/components/Input';
import Text from 'src/components/Text';
import View from 'src/components/View';
import Button from 'src/components/Button';

const Register: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView style={{marginTop: 38}}>
        <VStack space={2} mx="8">
          <Heading textAlign={'center'}>Register account</Heading>
          <Text w={300} textAlign={'center'}>
            Fill your details or continue with social media
          </Text>
          <RegisterDetails />
        </VStack>
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
        <Text textAlign={'center'} marginBottom={8}>
          Already Have Account? Log In
        </Text>
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
          <FormControl isRequired>
            <Stack space={3} mb={'8'}>
              <Input
                label="Nombre"
                placeholder="Enter your name"
                helperText="We will send you a confirmation email"
                type="text"
                errorMessage="Please enter a valid name"
              />

              <Input
                label="Email"
                placeholder="Enter your email"
                helperText="We will send you a confirmation email"
                type="text"
                errorMessage="Please enter a valid email"
              />
              <Input
                label="Password"
                placeholder="Enter your password"
                helperText="Password must be at least 8 characters"
                type="password"
                errorMessage="Please enter a valid password"
              />
            </Stack>

            <Button onPress={handleSubmit}>Sign Up</Button>
            <ButtonWithIcon onPress={handleSubmit}>
              Sign Up With Google
            </ButtonWithIcon>
          </FormControl>
        )}
      </Formik>
    </View>
  );
};

export default Register;
