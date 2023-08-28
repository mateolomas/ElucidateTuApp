import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Text} from 'react-native';
import LayoutWithButton, {styles} from '../../../components/LayoutWithButton';

const LetsStarted2 = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  return (
    <LayoutWithButton
      buttonTitle="Next"
      onPress={() => navigation.navigate('LogIn')}>
      <ImageBackground
        source={require('../../../../assets/images/walkthrough/Walk3.png')}
        style={{width: 275, height: 300}}
      />
      <Text style={styles.mainTitle}>Join Our Thriving Community</Text>

      <Text style={styles.secondTitle}>
        Connect with fellow users, share insights, and be a part of something
        bigger with Elucidate
      </Text>
    </LayoutWithButton>
  );
};

export default LetsStarted2;
