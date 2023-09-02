import LottieView from 'lottie-react-native';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import Button from 'src/components/Button';
import Heading from 'src/components/Heading';
import LayoutWithButton from 'src/components/LayoutWithButton';
import Text from 'src/components/Text';

const WelcomeToQuiz = ({navigation}: {navigation: any}) => {
  return (
    <LayoutWithButton
      onPress={() => {
        navigation.pop();
        navigation.replace('InitialQuestions', 1);
      }}
      buttonTitle="Start Quiz"
      backgroundColor="white">
        <View style={{
          marginTop: 40,
        }}>
      <Heading variant="h1" color="green">
        Elu
      </Heading>
      </View>
      <LottieView
        autoPlay
        loop
        style={{width: 200, height: 200}}
        source={require('../../../assets/lottie/RobotNiceNice.json')}
      />

      <View style={{padding: 20, flex: 1}}>
        <Heading>Create Your Profile Now!</Heading>
        <Heading variant="h5">Let's get to know you better</Heading>
        <Heading variant="body">
          Lets' train Elu for know you better and give you the best experience
        </Heading>
      </View>
    </LayoutWithButton>
  );
};

export default WelcomeToQuiz;
