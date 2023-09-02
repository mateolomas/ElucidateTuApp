import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginNavigator from 'src/navigators/LoginNavigator';
import StartQuiz from 'src/navigators/StartQuizNavigator';
import StartQuizNavigator from 'src/navigators/StartQuizNavigator';
import ChatWithBot from 'src/screens/ChatWithBot';
import LogInNavigator from 'src/navigators/LoginNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <LogInNavigator />
    </NavigationContainer>
  );
}

export default App;
