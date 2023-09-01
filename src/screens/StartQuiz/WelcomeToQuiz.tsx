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
      <View style={{padding: 20}}>
        <Heading>Create Your Profile Now!</Heading>
        <Heading variant="h5">Let's get to know you better</Heading>
        <Heading variant="body">
          Create a profile to save your learning progress and keep learning for
          free!
        </Heading>
      </View>
    </LayoutWithButton>
  );
};

export default WelcomeToQuiz;
