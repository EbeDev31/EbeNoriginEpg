/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation';
import Home from './EPG/home';
import Home2 from './EPG/ProgPage/progPage';




const HomeStack = createStackNavigator({
  ftg: Home,
  
  paddy: Home2,
  
  
});

const RootStack = createBottomTabNavigator({
  main: HomeStack,
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    //horizontal:true,
    // margin:-0,
    backgroundColor: 'green',
    // alignItems: 'center',
  },
});
