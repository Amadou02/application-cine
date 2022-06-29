import React from 'react';
import {Appbar} from 'react-native-paper';

export default function AppHeader({navigation, back}) {
  return (
    <Appbar.Header>
      {back && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title="LMMovies" />
    </Appbar.Header>
  );
}
