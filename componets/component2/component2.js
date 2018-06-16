import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class Component2 extends Component {

    state = {
        touched: ''
    };

    onPress = () => {
        this.setState({touched: 'this is touched.'});
    }

    onPress2 = () => {
       console.log('onPress 2');
    }
    render() {
        const { touched } = this.state;
        return (
          <View>
            <View style={styles.myView}>
                <Text style={styles.myText}>
                    Welcome compoent 2
                </Text>
            </View>
            <View style={styles.container}>
             <TouchableHighlight onPress={this.onPress} style={styles.v1} underlayColor="blue">
                <View>
                    <Text>v1</Text>
                </View>
              </TouchableHighlight>
                    <TouchableOpacity onPress={ this.onPress2 } style={styles.v2}>
                <View>
                    <Text>v2 { touched}</Text>
                </View>
              </TouchableOpacity>
                <View style={styles.v3}>
                    <Text>v3</Text>
                </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   myView: {
       backgroundColor: '#000',
   },
   myText: {
       color : 'red'
   },
   container: {
       flexDirection : 'row',
       height: 100,
   },
   v1: {
       flex: 1, 
       backgroundColor: 'yellow'
   },
   v2: {
       flex: 1,
       backgroundColor: 'green'
   },
   v3: {
       flex: 1,
       backgroundColor: 'blue'
   }
});