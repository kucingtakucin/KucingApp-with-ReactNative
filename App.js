/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Hello, world!</Text>
                <Text>Namaku Adam, biasa dipanggil Arthur</Text>
            </View>
        );
    }
}

