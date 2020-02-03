/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ThemeContext} from 'react-navigation';
import LogoTitle from '../components/logoTitle';
import head from '../assets/default.png';

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: () => <LogoTitle />,
      headerRight: () => (
        <Button onPress={navigation.toggleDrawer} title="Info" color="#fff" />
      ),
      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Modal"
          color="#fff"
        />
      ),
      drawerLabel: 'Home',
      drawerIcon: ({tintColor}) => (
        <Image source={head} style={[styles.icon, {tintColor: tintColor}]} />
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({increaseCount: this._increaseCount});
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({count: this.state.count + 1});
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen {this.state.count}</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate('Details', {otherParam: 'Details'})
          }
        />
        <ThemeContext.Consumer>
          {theme => (
            <TouchableOpacity
              style={{backgroundColor: theme === 'light' ? '#000' : '#fff'}}>
              <Text style={{color: theme === 'light' ? '#fff' : '#000'}}>
                Button!
              </Text>
            </TouchableOpacity>
          )}
        </ThemeContext.Consumer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;
