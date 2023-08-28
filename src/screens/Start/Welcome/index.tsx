import {NavigationProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import LayoutWithButton, {styles} from '../../../components/LayoutWithButton';

const Welcome: FC<WelcomeProps> = ({navigation}) => {
  console.log(navigation);
  return (
    <LayoutWithButton
      onPress={() => navigation.navigate('LetsStarted')}
      buttonTitle="Start">
      <View style={{flex: 1}} />
      <ImageBackground
        source={require('../../../../assets/images/walkthrough/Walk1.png')}
        style={{width: 360, height: 360}}
      />

      <Text style={styles.mainTitle}>Learn languages easily day-by-day</Text>
      <View style={{flex: 1}} />
    </LayoutWithButton>
  );
};

interface WelcomeProps {
  navigation: NavigationProp<any, any>;
}

interface ExtraProps {}

export default Welcome;
