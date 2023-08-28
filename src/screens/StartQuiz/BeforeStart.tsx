import React from 'react';
import {SafeAreaView} from 'react-native';
import Button from 'src/components/Button';
import Text from 'src/components/Text';

const BeforeStart = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView>
      <Text>BeforeStart</Text>
      <Button onPress={() => navigation.navigate('Question', 1)}>
        Start Quiz
      </Button>
    </SafeAreaView>
  );
};

export default BeforeStart;
