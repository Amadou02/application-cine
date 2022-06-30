import React from 'react';

import {
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import RootNavigation from './src/navigation/RootNavigation';

import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/redux/favoritesSlice';

const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 2,
  version: 3,
  colors: {
    primary: '#121212',
    accent: '#FFB20F',
    background: '#F1F7ED',
    surface: '#333333',
    text: '#F5F5F5',
    error: '#B71F0E',
    disabled: '#BEC6C6',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <RootNavigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
