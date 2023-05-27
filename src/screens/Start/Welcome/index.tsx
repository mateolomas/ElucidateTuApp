import { NavigationProp } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  ImageBackground,
  Text,
  View
} from 'react-native';
import LayoutWithButton, { styles } from '../../../components/LayoutWithButton';

const Welcome: FC<WelcomeProps> = ({navigation}) => {
    console.log(navigation)
  return (
    <LayoutWithButton onPress={() => navigation.navigate('LetsStarted')} buttonTitle='Get Started'>
        <Text style={styles.mainTitle}>Welcome to Nike</Text>
        
        <ImageBackground
          source={require('../../../../assets/images/sneakers.png')}
          style={{width: 375, height: 375}}
        />
        <View style={{flex: 1}} />
        <ImageBackground
          source={require('../../../../assets/images/nikeBackground.png')}
            style={{
                alignItems: 'center',
            justifyContent: 'center',
            marginTop: "100%",
            alignContent: 'center',
            width: "100%",
            height: 175,
            position: 'absolute',
        }}
        />
        <View style={{flex: 1}} />
    </LayoutWithButton>
        
    
  );
};

interface WelcomeProps {
    navigation: NavigationProp<any, any>;
}

interface ExtraProps {
}


export default Welcome;
