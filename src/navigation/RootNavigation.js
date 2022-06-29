import React from 'react';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeStack from './HomeStack';

import FavoritesStack from './FavoritesStack';

const Tab = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesStack}
        options={{
          tabBarLabel: 'Favories',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcon name="heart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
