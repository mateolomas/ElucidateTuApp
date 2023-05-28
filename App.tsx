import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from 'src/screens/Start/Welcome';
import LetsStarted from 'src/screens/Start/LetsStarted';
import LetsStarted2 from 'src/screens/Start/LetsStarted2';
import LogIn from 'src/screens/Loginto/LogIn';
import { NativeBaseProvider } from 'native-base';
import { theme } from 'src/theme';
import Register from 'src/screens/Loginto/Register';

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
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
