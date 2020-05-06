/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { Text, TextInput, View, Image, ScrollView } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>Hello, World!</Text>
                    <Text>Hai, namaku Adam, biasa dipanggil Arthur!</Text>
                </View>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
                           style={{width: 200, height: 200}}
                    />
                    <TextInput style={{
                        height: 40,
                        width: 250,
                        borderColor: 'gray',
                        borderWidth: 1,
                    }} defaultValue="Halo semuanya!"/>
                </View>
            </View>
        );
    }
}

