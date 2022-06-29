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
  roundness: 2,
  version: 3,
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
