import React, {FC} from 'react';
import {Formik} from 'formik';
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
import Heading from 'src/components/Heading';

const LogIn: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView style={{marginTop: 38}}>
        <ImageBackground
          source={require('../../../../assets/images/logos/Logo.png')}
          style={{width: 155, height: 125, marginLeft: 120}}
        />

        <Heading>Hello Again to Elucidate!</Heading>
        <Text>Fill your details or continue with social media</Text>
        <LogInDetails navigation={navigation} />
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text
          style={{
            textAlign: 'center',
          }}>
          New User? Create Account
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const LogInDetails = (props: any) => {
  const handleSign = () => {
    console.log('sda')
    props.navigation.navigate('HomeNavigator');
  };
  return (
    <View style={{marginHorizontal: 30, marginTop: 4}}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View>
            <Input
              handleChange={handleChange('email')}
              values={values.email}
              handleBlur={handleBlur('email')}
              label="Email"
              placeholder="Enter your email"
              helperText="We will send you a confirmation email"
              type="text"
              errorMessage={errors.email ? errors.email : ''}
            />
            <Input
              values={values.password}
              handleChange={handleChange('password')}
              handleBlur={handleBlur('password')}
              label="Password"
              placeholder="Enter your password"
              helperText="Password must be at least 8 characters"
              type="password"
              errorMessage={errors.password ? errors.password : ''}
            />
            <Button onPress={handleSign}>Sign In</Button>
            <ButtonWithIcon onPress={() => console.log('sda')}>
              Sign In With Google
            </ButtonWithIcon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ForgotPassword')}
              style={{
                alignItems: 'flex-end',
              }}>
              <Text>Recover password</Text>
            </TouchableOpacity>
          </View>
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
