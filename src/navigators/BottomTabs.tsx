import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Heading from 'src/components/Heading';
import Text from 'src/components/Text';
import View from 'src/components/View';
import Cart from 'src/screens/Home/Cart';
import Details from 'src/screens/Home/Details';
import Explore from 'src/screens/Home/Explore';
import Notifications from 'src/screens/Home/Notifications';
import Profile from 'src/screens/Home/Profile';

const Tab = createBottomTabNavigator();

const BottomTabsHome = ({
  navigation,
}: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        tabBarStyle: {
          height: 65,
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: false,

        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" color={'#258A79'} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="amp-stories" color={'#258A79'} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Details}
        options={{
          tabBarIcon: ({color}) => (
            <TouchableOpacity onPress={() => navigation.navigate('WelcomeToQuiz')}>
              <View
                style={{
                  height: 60,
                  width: 60,

                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#258A79',
                  borderColor: '#258A79',
                  borderWidth: 2,
                  borderRadius: 30,
                  top: -25,
                  elevation: 5,
                }}>
                <Icon name="book" color={'white'} size={28} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="chat" color={'#258A79'} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="settings" color={'#258A79'} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsHome;
