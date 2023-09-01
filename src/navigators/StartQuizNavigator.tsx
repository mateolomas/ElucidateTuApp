import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BeforeStart from 'src/screens/StartQuiz/BeforeStart';
import InitialQuestions from 'src/screens/StartQuiz/InitialQuestions';
import Question from 'src/screens/StartQuiz/Question';
import Rulette from 'src/screens/StartQuiz/Rulette';
import WelcomeToQuiz from 'src/screens/StartQuiz/WelcomeToQuiz';
import BottomTabsHome from './BottomTabs';
import CalendarScreen from 'src/screens/Calendar';
import ChatWithBot from 'src/screens/ChatWithBot';

const Stack = createNativeStackNavigator();

const StartQuizNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WelcomeToQuiz" component={WelcomeToQuiz} />
      <Stack.Screen name="InitialQuestions" component={InitialQuestions} />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="BeforeStart" component={BeforeStart} />
      <Stack.Screen name="Rulette" component={Rulette} />
      <Stack.Screen name="HomeNavigator" component={BottomTabsHome} />
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen name="ChatWithBot" component={ChatWithBot} />
    </Stack.Navigator>
  );
};

export default StartQuizNavigator;
