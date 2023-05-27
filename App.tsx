import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LetsStarted from './src/screens/Start/LetsStarted';
import Welcome from './src/screens/Start/Welcome';
import LetsStarted2 from './src/screens/Start/LetsStarted2';
import LogIn from './src/screens/Loginto/LogIn';


const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return( <NavigationContainer >
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
      options={{
        headerShown: false
      }}
       name="Welcome" component={Welcome} />
       <Stack.Screen
      options={{
        headerShown: false
      }}
        name="LetsStarted" component={LetsStarted} />
        <Stack.Screen
      options={{
        headerShown: false
      }}
        name="LetsStarted2" component={LetsStarted2} />
         <Stack.Screen
      options={{
        headerShown: false
      }}
        name="LogIn" component={LogIn} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}


export default App;
