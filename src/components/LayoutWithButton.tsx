import React, { FC } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import Button from './Button';

const LayoutWithButton: FC<Props> = ({children, buttonTitle, onPress}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
       {/*  <Text style={styles.mainTitle}>Welcome to Nike</Text>
        <View style={{flex: 1}} />
        <ImageBackground
          source={require('../../../assets/images/sneakers.png')}
          style={{width: 375, height: 375}}
        />
        <View style={{flex: 1}} /> */}
        {children}
      </View>
      <View style={{paddingHorizontal: 20}}>
      <Button
        onPress={onPress}
      >{buttonTitle}</Button>
        </View>
    </SafeAreaView>
  )
}

interface Props {
    onPress: () => void;
    buttonTitle: string;
    children: React.ReactNode;
}


export const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#1483C2',
      /* alignItems: 'center', */
    },
    container: {
      flex: 1,
      alignItems: 'center',
    },
    secondTitle: {
      width: 300,
            textAlign: 'center',
            color: 'white',
            fontSize: 15,
            marginVertical: 10,
            fontFamily: 'Raleway',
    },
    mainTitle: {
      marginTop: 100,
      fontFamily: 'Raleway',
      fontWeight: '800',
      fontStyle: 'normal',
      fontSize: 30,
      width: 250,
      lineHeight: 35,
      color: '#FFFFFF',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  });
  

export default LayoutWithButton