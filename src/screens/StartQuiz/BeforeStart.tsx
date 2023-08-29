import React from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';
import Button from 'src/components/Button';
import Text from 'src/components/Text';

const BeforeStart = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView>
      <Text>BeforeStart</Text>
      <ImageBackground
        source={require('../../../assets/images/walkthrough/Walk1.png')}
        style={{width: 360, height: 360}}
      />
      <Button onPress={() => navigation.navigate('Question', 1)}>
        Start Quiz
      </Button>
    </SafeAreaView>
  );
};

export default BeforeStart;
