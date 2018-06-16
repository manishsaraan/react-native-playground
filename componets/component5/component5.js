import React, { Component } from 'react';
import { AppRegistery, Text, View, ListView, StyleSheet, TouchableHighlight, Button } from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class MyApp extends Component {
    state = {
        userDataSource: ds,
    }

    componentDidMount(){
        this.fetchUser();
    }

    onPress = (user) => {
        const { navigate } = this.props.navigation;
        console.log(user)
        navigate('Details', { user: user })
    }
    renderRow = (user, sectionId, rowId, highlightRow) => {
        return (
            <TouchableHighlight onPress={() => this.onPress(user)}>
                <View style={styles.row}>
                    <Text style={styles.rowText}>
                        {user.name}: { user.email}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
    fetchUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users').then( response => response.json())
        .then(response => {
            this.setState({userDataSource: this.state.userDataSource.cloneWithRows(response)})
        })
    }
    render() {
        return (
            <ListView
                dataSource={this.state.userDataSource}
                renderRow={this.renderRow}
            />
        );
    }

    render() {
        return (
         <View>
            <ListView
                dataSource={this.state.userDataSource}
                renderRow={this.renderRow}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 3,
    },
    rowText: {
        flex: 1
    }
})