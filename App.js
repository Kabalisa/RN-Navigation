/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import AppNavigator from './src/navigation/index';

const prefix = 'mychat://';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigator uriPrefix={prefix} />
    </View>
  );
};

export default App;
