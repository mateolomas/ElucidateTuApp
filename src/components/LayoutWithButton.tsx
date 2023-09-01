import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Button from './Button';
import {Icon} from '@rneui/base';

const LayoutWithButton: FC<Props> = ({
  children,
  buttonTitle,
  onPress,
  onBack,
  backgroundColor = '#0f513e',
}) => {
  return (
    <SafeAreaView
      style={{...styles.safeArea, backgroundColor: backgroundColor}}>
      {onBack && (
        <View
          style={{
            alignSelf: 'flex-start',
          }}>
          <TouchableOpacity onPress={onBack}>
            <Icon name="arrow-left" color={'white'} size={38} />
          </TouchableOpacity>
        </View>
      )}

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
      <View
        style={{
          paddingHorizontal: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Step />
        <Button onPress={onPress}>{buttonTitle}</Button>
      </View>
    </SafeAreaView>
  );
};

const Step = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View
        style={{
          width: 30,
          height: 5,
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
        }}
      />
    </View>
  );
};
interface Props {
  onPress: () => void;
  onBack?: () => void;
  buttonTitle: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F513E',
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
    paddingHorizontal: 10,
    fontStyle: 'normal',
    fontSize: 30,
    /* width: 250, */
    lineHeight: 35,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default LayoutWithButton;
