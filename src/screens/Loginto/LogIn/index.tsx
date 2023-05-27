import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Button, TextField, View} from 'react-native-ui-lib';

const LogIn = ({navigation}: {navigation: any}) => {
  const onChangeText = (value: string) => {
    console.log('value', value);
  };
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View
        style={{
          position: 'relative',
          width: 50,
          height: 50,
          paddingLeft: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 16, padding: 10, backgroundColor: "#F7F7F9"}}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{marginTop: 18}}>
        <View flex padding-s5>
          <Text style={styles.title}>Hello Again!</Text>
          <Text style={styles.subtitle}>
            Fill your details or continue with social media
          </Text>
        </View>
        <View flex padding-s5>
          <LogInDetails />
          <Button
            label={'Sign In'}
            size={Button.sizes.large}
            borderRadius={14}
            backgroundColor={'#0D6EFD'}
            style={{marginTop: 24}}
          />
          <Button
            label={'Sign In With Google'}
            size={Button.sizes.large}
            borderRadius={14}
            labelStyle={{color: '#2b2b2b'}}
            iconStyle={{
              marginRight: 10,
              width: 20,
              height: 20,
              tintColor: '#4285f4',
            }}
            style={{marginTop: 24}}
            iconSource={require('../../../../assets/images/googleIcon.png')}
            backgroundColor={'#F7F7F9'}
          />
        </View>
      </ScrollView>
      <TouchableOpacity>
        <Text style={{...styles.label2, textAlign: 'center', fontSize: 16}}>
          New User? Create Account
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const LogInDetails = () => {
  const handleChange = (value: string) => () => {};
  const handleBlur = (value: string) => () => {};

  return (
    <View>
      <Text style={styles.label}>Email address</Text>
      <View style={styles.input}>
        <TextField placeholder="xyz@gmail.com" padding-16 />
      </View>
      <Text style={styles.label}>Password</Text>
      <View style={styles.input}>
        <TextField placeholder="password" secureTextEntry padding-16 />
      </View>

      <TouchableOpacity
        style={{
          alignItems: 'flex-end',
        }}>
        <Text style={styles.label2}>Recover password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default LogIn;
