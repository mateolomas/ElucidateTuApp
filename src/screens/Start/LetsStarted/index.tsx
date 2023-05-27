import React from 'react';
import {
    ImageBackground,
    Text,
    View
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import LayoutWithButton, { styles } from '../../../components/LayoutWithButton';

const LetsStarted = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  return (
    
    <LayoutWithButton onPress={() => navigation.navigate('LetsStarted2')} buttonTitle='Next'>

        <ImageBackground
          source={require('../../../../assets/images/sneakers2.png')}
          style={{width: 375, height: 375}}
        />
        <Text style={styles.mainTitle}>Let's Start the Journey With Nike</Text>
        <ImageBackground
          source={require('../../../../assets/images/nikeBackground.png')}
            style={{
                alignItems: 'center',
            justifyContent: 'center',
            marginTop: "90%",
            alignContent: 'center',
            width: "100%",
            height: 175,
            position: 'absolute',
        }}
        />
        <Text style={styles.secondTitle}
            
        >Smart, Gorgeous & Fashionable Collection Explor Now</Text>
        

        <View style={{flex: 1}} />
    </LayoutWithButton>
      
    
  )
}

export default LetsStarted