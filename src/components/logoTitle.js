/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import head from '../assets/default.png';

const LogoTitle = () => {
  return <Image source={head} style={{width: 30, height: 30}} />;
};

export default LogoTitle;
