import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Button from 'src/components/Button';
import Heading from 'src/components/Heading';
import Input from 'src/components/Input';
import Text from 'src/components/Text';
import View from 'src/components/View';
import {questions} from 'src/constants/questions';

const Question = ({navigation, route}: {navigation: any; route: any}) => {
  console.log({route, navigation});
  const questionNumber = route.params;
  const questionsLen = questions.length;

  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 20}}>
        <Text>Question</Text>
        <Heading>
          {questions.find(question => question.id === questionNumber)?.question}
        </Heading>
        <Input
          label={''}
          handleChange={undefined}
          handleBlur={undefined}
          values={undefined}
          placeholder={''}
          helperText={''}
          type={'text'}
          errorMessage={''}
        />
        <Button
          onPress={() => navigation.navigate('Rulette', questionNumber + 1)}>
          Next Question
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Question;
