import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LogIn from 'src/screens/Loginto/LogIn';
import LetsStarted from 'src/screens/Start/LetsStarted';
import LetsStarted2 from 'src/screens/Start/LetsStarted2';
import Welcome from 'src/screens/Start/Welcome';
import StartQuizNavigator from './StartQuizNavigator';

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
      {/* <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="HomeNavigator" component={BottomTabsHome} />  */}
    </Stack.Navigator>
  );
};

export default LogInNavigator;
