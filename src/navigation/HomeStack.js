import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import AppHeader from '../components/AppHeader';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{header: props => <AppHeader {...props} />}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
