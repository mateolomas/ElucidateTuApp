import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import LayoutWithButton, {styles} from '../../../components/LayoutWithButton';
import LottieView from 'lottie-react-native';

const LetsStarted2 = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  return (
    <LayoutWithButton
      buttonTitle="Next"
      onPress={() => navigation.navigate('LogIn')}
      onBack={() => navigation.goBack()}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <LottieView
            autoPlay
            loop
            style={{width: 400, height: 400}}
            source={require('../../../../assets/lottie/Lapicito.json')}
          />
        </View>
        
      {/* <ImageBackground
        source={require('../../../../assets/images/walkthrough/Walk3.png')}
        style={{width: 275, height: 300}}
      /> */}
      <Text style={styles.mainTitle}>Join Our Thriving Community</Text>

      <Text style={styles.secondTitle}>
        Connect with fellow users, share insights, and be a part of something
        bigger with Elucidate
      </Text>
    </LayoutWithButton>
  );
};

export default LetsStarted2;
