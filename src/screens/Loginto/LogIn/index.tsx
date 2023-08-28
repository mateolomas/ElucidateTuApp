import React, {FC} from 'react';
import {Formik} from 'formik';
import {FormControl, Heading, Image, Stack, VStack} from 'native-base';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ButtonWithIcon from 'src/components/ButtonWithIcon';
import Input from 'src/components/Input';
import Text from 'src/components/Text';
import View from 'src/components/View';
import Button from 'src/components/Button';

const LogIn: FC<Props> = ({navigation}) => {
  const onChangeText = (value: string) => {
    console.log('value', value);
  };
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView style={{marginTop: 38}}>
        <ImageBackground
          source={require('../../../../assets/images/logos/Logo.png')}
          style={{width: 155, height: 125, marginLeft: 120}}
        />
        <VStack space={2} mx="8">
          <Heading textAlign={'center'}>Hello Again to Elucidate!</Heading>
          <Text w={300} textAlign={'center'}>
            Fill your details or continue with social media
          </Text>
          <LogInDetails navigation={navigation} />
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

const LogInDetails = (props: any) => {
  const handleChange = (value: string) => () => {};
  const handleBlur = (value: string) => () => {};

  return (
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <FormControl isRequired>
            <Stack space={2} mb={'8'}>
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
              <TouchableOpacity
                onPress={() => props.navigation.navigate('ForgotPassword')}
                style={{
                  alignItems: 'flex-end',
                }}>
                <Text>Recover password</Text>
              </TouchableOpacity>
            </Stack>

            {/* <Button onPress={handleSubmit}>Sign In</Button>
            <ButtonWithIcon onPress={handleSubmit}>
              Sign In With Google
            </ButtonWithIcon> */}
          </FormControl>
        )}
      </Formik>
    </View>
  );
};

interface Props {
  navigation: any;
}
/* const styles = StyleSheet.create({
  title: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 38,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#2B2B2B',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    marginTop: 8,
    lineHeight: 24,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#707881',
  },
  label: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    marginTop: 30,
    marginBottom: 12,
    lineHeight: 20,
    color: '#2B2B2B',
  },
  label2: {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    marginVertical: 12,
    lineHeight: 20,
    color: '#707B81',
  },
  input: {
    backgroundColor: '#F7F7F9',
  },
}); */

export default LogIn;
