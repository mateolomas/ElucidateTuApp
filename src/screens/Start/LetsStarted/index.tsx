import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import LayoutWithButton, {styles} from '../../../components/LayoutWithButton';
import LottieView from 'lottie-react-native';

const LetsStarted = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  return (
    <LayoutWithButton
      backgroundColor="#ebc74644"
      onPress={() => navigation.navigate('LetsStarted2')}
      buttonTitle="Next"
      onBack={() => navigation.goBack()}>
      {/* <ImageBackground
        source={require('../../../../assets/images/walkthrough/Walk2.png')}
        style={{width: 375, height: 375}}
      /> */}
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <LottieView
          autoPlay
          loop
          style={{width: 375, height: 375}}
          source={require('../../../../assets/lottie/ChicaCompujiji.json')}
        />
      </View>

      <Text style={{...styles.mainTitle, color: '#000000a5'}}>
        Let's Start the Journey With Elucidate
      </Text>

      <Text style={{...styles.secondTitle, color: '#000000a5'}}>
        Our carefully crafted features are designed to streamline your tasks and
        amplify your efficiency.
      </Text>

      <View style={{flex: 1}} />
    </LayoutWithButton>
  );
};

export default LetsStarted;
