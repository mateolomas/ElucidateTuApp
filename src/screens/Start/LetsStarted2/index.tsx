import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { ImageBackground, Text } from 'react-native'
import LayoutWithButton, { styles } from '../../../components/LayoutWithButton'

const LetsStarted2 = ({navigation}: {
    navigation: NavigationProp<any, any>
}) => {
  return (
    <LayoutWithButton buttonTitle='Next' onPress={() => navigation.navigate("LogIn")} >
        <ImageBackground
          source={require('../../../../assets/images/sneakers3.png')}
          style={{width: 375, height: 300}}
        />
        <Text style={styles.mainTitle}>You Have the Power To</Text>
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
        <Text style={styles.secondTitle}>There Are Many Beautiful And Attractive Plants To Your Room</Text>
        
    </LayoutWithButton>
        
  )
}

export default LetsStarted2