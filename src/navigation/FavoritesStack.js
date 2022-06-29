import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AppHeader from '../components/AppHeader';
const Stack = createNativeStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator
      screenOptions={{header: props => <AppHeader {...props} />}}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
