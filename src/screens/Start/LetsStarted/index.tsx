import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import LayoutWithButton, {styles} from '../../../components/LayoutWithButton';

const LetsStarted = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  return (
    <LayoutWithButton
      onPress={() => navigation.navigate('LetsStarted2')}
      buttonTitle="Next">
      <ImageBackground
        source={require('../../../../assets/images/walkthrough/Walk2.png')}
        style={{width: 375, height: 375}}
      />
      <Text style={styles.mainTitle}>
        Let's Start the Journey With Elucidate
      </Text>

      <Text style={styles.secondTitle}>
        Our carefully crafted features are designed to streamline your tasks and
        amplify your efficiency.
      </Text>

      <View style={{flex: 1}} />
    </LayoutWithButton>
  );
};

export default LetsStarted;
