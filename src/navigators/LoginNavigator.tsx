import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LogIn from 'src/screens/Loginto/LogIn';
import LetsStarted from 'src/screens/Start/LetsStarted';
import LetsStarted2 from 'src/screens/Start/LetsStarted2';
import Welcome from 'src/screens/Start/Welcome';
import StartQuizNavigator from './StartQuizNavigator';
import Register from 'src/screens/Loginto/Register';
import ForgotPassword from 'src/screens/Loginto/ForgotPassword';
import OTPVerification from 'src/screens/Loginto/OTPVerification';
import BottomTabsHome from './BottomTabs';
import CalendarScreen from 'src/screens/Calendar';
import ChatWithBot from 'src/screens/ChatWithBot';
import BeforeStart from 'src/screens/StartQuiz/BeforeStart';
import InitialQuestions from 'src/screens/StartQuiz/InitialQuestions';

import Rulette from 'src/screens/StartQuiz/Rulette';
import WelcomeToQuiz from 'src/screens/StartQuiz/WelcomeToQuiz';
import ChatWithBot2 from 'src/screens/ChatWithBot2';
import Abilities from 'src/screens/Abilities';

const Stack = createNativeStackNavigator();

const LogInNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="LetsStarted" component={LetsStarted} />
      <Stack.Screen name="LetsStarted2" component={LetsStarted2} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="StartQuiz" component={StartQuizNavigator} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      {/* <Stack.Screen name="OTPVerification" component={OTPVerification} /> */}
      <Stack.Screen name="HomeNavigator" component={BottomTabsHome} />
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen name="ChatWithBot" component={ChatWithBot} />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <Stack.Screen name="WelcomeToQuiz" component={WelcomeToQuiz} />
      </Stack.Group>
      <Stack.Screen name="InitialQuestions" component={InitialQuestions} />

      <Stack.Screen name="BeforeStart" component={BeforeStart} />
      <Stack.Screen name="Rulette" component={Rulette} />
      <Stack.Screen name="ChatWithBot2" component={ChatWithBot2} />
      <Stack.Screen name="Abilities" component={Abilities} />
    </Stack.Navigator>
  );
};

export default LogInNavigator;
