import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import ForgotPassword from 'src/screens/Loginto/ForgotPassword';
import LogIn from 'src/screens/Loginto/LogIn';
import Register from 'src/screens/Loginto/Register';
import LetsStarted from 'src/screens/Start/LetsStarted';
import LetsStarted2 from 'src/screens/Start/LetsStarted2';
import Welcome from 'src/screens/Start/Welcome';
import { theme } from 'src/theme';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="LetsStarted"
          component={LetsStarted}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="LetsStarted2"
          component={LetsStarted2}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="LogIn"
          component={LogIn}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="ForgotPassword"
          component={ForgotPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
