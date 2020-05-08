/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { Text, TextInput, View, Image} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    setText(newText){
        this.setState({
            text: newText,
        });
    }

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
                    }}
                               placeholder="Halo semuanya!"
                               onChangeText={text => this.setText(text)}
                    />
                    <Text style={{marginTop: 10}}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>
                </View>
            </View>
        );
    }
}

