import React, { Component } from 'react';
import { AppRegistery, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Component5 from './componets/component5/component5';
import Component6 from './componets/component6/component6';
const RootStack = createStackNavigator(
  {
    Home: Component5,
    Details: Component6,
  },
  {
    initialRouteName: 'Home'
  }
);

export default class MyApp extends Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
