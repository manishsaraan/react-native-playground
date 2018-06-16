import React, { Component } from 'react';
import { AppRegistery, Text, View, Button} from 'react-native';

export default class MyApp extends Component {
    render() {
        const { navigation } = this.props;
        const { state: { params } } = navigation;
        const { user } = params;
        console.log(navigation);
        return (
            <View>
                <Text>
                    {user.name}
                    {user.email}
                    {user.phone}
                </Text>
                <Button title="Go Back" onPress={() => navigation.goBack()} />
            </View>
        );
    }
}
