import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ForgotPassword from 'src/screens/Loginto/ForgotPassword';
import LogIn from 'src/screens/Loginto/LogIn';
import OTPVerification from 'src/screens/Loginto/OTPVerification';
import Register from 'src/screens/Loginto/Register';
import LetsStarted from 'src/screens/Start/LetsStarted';
import LetsStarted2 from 'src/screens/Start/LetsStarted2';
import Welcome from 'src/screens/Start/Welcome';
import BottomTabsHome from './BottomTabs';

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
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="HomeNavigator" component={BottomTabsHome} />
    </Stack.Navigator>
  );
};

export default LogInNavigator;
