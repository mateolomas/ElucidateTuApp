import React from 'react';
import {ImageBackground, View} from 'react-native';
import Button from 'src/components/Button';
import Heading from 'src/components/Heading';
import LayoutWithButton from 'src/components/LayoutWithButton';
import Text from 'src/components/Text';

const WelcomeToQuiz = ({navigation}: {navigation: any}) => {
  return (
    <LayoutWithButton
      onPress={() => navigation.navigate('InitialQuestions', 1)}
      buttonTitle="Start Quiz"
      backgroundColor="white">
      <ImageBackground
        source={require('../../../assets/images/walkthrough/Walk2.png')}
        style={{width: 455, height: 325}}
      />

      <Heading>Create Your Profile Now!</Heading>
      <View style={{flex: 1}} />
      <Heading variant="h5">Let's get to know you better</Heading>
      <View style={{flex: 1}} />
      <Heading variant="body">
        Create a profile to save your learning progress and keep learning for
        free!
      </Heading>
      <View style={{flex: 1}} />
      <Button onPress={() => navigation.navigate('HomeNavigator')}>
        Go to home screen
      </Button>
    </LayoutWithButton>
  );
};

export default WelcomeToQuiz;
