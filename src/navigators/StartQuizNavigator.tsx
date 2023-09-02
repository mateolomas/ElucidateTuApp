import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BeforeStart from 'src/screens/StartQuiz/BeforeStart';
import InitialQuestions from 'src/screens/StartQuiz/InitialQuestions';

import Rulette from 'src/screens/StartQuiz/Rulette';
import WelcomeToQuiz from 'src/screens/StartQuiz/WelcomeToQuiz';
import BottomTabsHome from './BottomTabs';
import CalendarScreen from 'src/screens/Calendar';
import ChatWithBot from 'src/screens/ChatWithBot';
import ChatWithBot2 from 'src/screens/ChatWithBot2';
import Cart from 'src/screens/Home/Cart';
import Abilities from 'src/screens/Abilities';

const Stack = createNativeStackNavigator();

const StartQuizNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <Stack.Screen name="WelcomeToQuiz" component={WelcomeToQuiz} />
        <Stack.Screen name="InitialQuestions" component={InitialQuestions} />

        <Stack.Screen name="BeforeStart" component={BeforeStart} />
        <Stack.Screen name="Rulette" component={Rulette} />
      </Stack.Group>
      <Stack.Screen name="HomeNavigator" component={BottomTabsHome} />
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen name="ChatWithBot" component={ChatWithBot} />
      <Stack.Screen name="ChatWithBot2" component={ChatWithBot2} />
      <Stack.Screen name="Abilities" component={Abilities} />
    </Stack.Navigator>
  );
};

export default StartQuizNavigator;
