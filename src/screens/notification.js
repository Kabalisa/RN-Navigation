/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Button, Image, StyleSheet, SafeAreaView} from 'react-native';
import star from '../assets/Gstar.png';

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({tintColor}) => (
      <Image source={star} style={[styles.icon, {tintColor: tintColor}]} />
    ),
  };

  render() {
    return (
      <SafeAreaView>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default MyNotificationsScreen;
