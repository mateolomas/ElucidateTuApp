import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Cart from 'src/screens/Home/Cart';
import Details from 'src/screens/Home/Details';
import Explore from 'src/screens/Home/Explore';
import Notifications from 'src/screens/Home/Notifications';
import Profile from 'src/screens/Home/Profile';

const Tab = createBottomTabNavigator();

const BottomTabsHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Favorites" component={Details} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabsHome;
