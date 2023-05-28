import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import {theme} from 'src/theme';
import LoginNavigator from 'src/navigators/LoginNavigator';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <LoginNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
