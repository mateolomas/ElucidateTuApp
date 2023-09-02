import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Button from 'src/components/Button';
import Heading from 'src/components/Heading';
import Input from 'src/components/Input';
import Text from 'src/components/Text';
import View from 'src/components/View';
import {initialQuestions, questions} from 'src/constants/questions';
import Rulette from './Rulette';

const InitialQuestions = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  console.log({route, navigation});
  const questionNumber = route.params;
  const questionsLen = questions.length;

  return <Rulette navigation={navigation} route={route} />;
};

export default InitialQuestions;
