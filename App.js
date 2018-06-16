import React, { Component } from 'react';
import { AppRegistery, Text, View } from 'react-native';
import Component3 from './componets/component3/component3';

export default class MyApp extends Component {
  render() {
    return (
      <View>
       <Component3 />
      </View>
    );
  }
}
