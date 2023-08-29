import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Heading from 'src/components/Heading';
import View from 'src/components/View';
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
        tabBarStyle: {
          height: 65,
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen
        name="Favorites"
        component={Details}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                /* backgroundColor: COLORS.white,
                borderColor: COLORS.primary, */
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Heading>+</Heading>
              {/* <Icon name="search" color={COLORS.primary} size={28} /> */}
            </View>
          ),
        }}
      />

      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabsHome;
