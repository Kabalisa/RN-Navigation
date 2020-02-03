/* eslint-disable no-unused-vars */
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {AsyncStorage, ActivityIndicator} from 'react-native';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import ModalScreen from '../screens/modalScreen';
import SettingsScreen from '../screens/settings';
import MyNotificationsScreen from '../screens/notification';
import AuthLoadingScreen from '../screens/authLoading';
import SignInScreen from '../screens/signIn';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: {
      screen: DetailsScreen,
      path: 'chat/:user',
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

// const AuthStack = createStackNavigator({SignIn: SignInScreen});

// const RootStack = createStackNavigator(
//   {
//     Main: {
//       screen: AppNavigator,
//       path: '',
//     },
//     MyModal: {
//       screen: ModalScreen,
//     },
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   },
// );

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen,
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: AppNavigator,
      path: '',
    },
    Settings: SettingsStack,
    Notifications: {
      screen: MyNotificationsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: '#694fad'},
    shifting: true,
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = 'ios-options';
        } else {
          iconName = 'ios-options';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    // tabBarOptions: {
    //   activeTintColor: 'tomato',
    //   inactiveTintColor: 'gray',
    // },
  },
);

// const MyDrawerNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: AppNavigator,
//     },
//     Notifications: {
//       screen: MyNotificationsScreen,
//     },
//   },
//   {
//     drawerPosition: 'right',
//     drawerType: 'front',
//   },
// );

// const SwitchNavigation = createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App: AppNavigator,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   },
// );

let Navigation = createAppContainer(TabNavigator);

export default Navigation;
// const persistenceKey = 'persistenceKey';

// const getPersistenceFunctions = () => {
//   return __DEV__
//     ? {
//         persistNavigationState: async navState => {
//           try {
//             await AsyncStorage.setItem(
//               persistenceKey,
//               JSON.stringify(navState),
//             );
//           } catch (err) {
//             // handle the error according to your needs
//           }
//         },
//         loadNavigationState: async () => {
//           const jsonString = await AsyncStorage.getItem(persistenceKey);
//           return JSON.parse(jsonString);
//         },
//       }
//     : undefined;
// };

// export default () => {
//   let theme = useColorScheme();
//   return (
//     <AppearanceProvider>
//       <Navigation
//         theme={theme}
//         {...getPersistenceFunctions()}
//         renderLoadingExperimental={() => <ActivityIndicator />}
//       />
//     </AppearanceProvider>
//   );
// };
