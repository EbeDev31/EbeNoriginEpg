/**
 * EPG App
 *
 *This Router component serves as 
 *the main entry point to the App
 * @flow
 *
 *
 *Root of the App uses a BottomTabNavigator which holds a :
 *
 ***StackNavigator which wraps the main Screen 
 *
 
 */
import * as React from 'react';
import {View,Text, Button,FlatList,TextInput,TouchableOpacity,StyleSheet,} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation';
import Home from './EPG/home';
import Home2 from './EPG/ProgPage/progPage';



// Main Page
const HomeStack = createStackNavigator({
  ftg: Home,
  
  paddy: Home2,
  
  
});

//Wrapper of Main Page
const RootStack = createBottomTabNavigator({
  main: HomeStack,
});

// Container of wrapper
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
