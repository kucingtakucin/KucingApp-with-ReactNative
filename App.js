/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
    Text, TextInput, View,
    Image, ScrollView, StyleSheet,
    ImageBackground} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    setText(newText){
        this.setState({text: newText});
    }

    render() {
        return (
            <ImageBackground source={require('./img/android2.png')} style={styles.backgroundImages}>
                <ScrollView contentContainerStyle={styles.flexParent}>
                    <View style={styles.flexChild}>
                        <Image source={require('./img/React-icon2.png')} style={[styles.margin, styles.logo]}/>
                        <Text style={styles.fontWeightBold}>Hello, React Native!</Text>
                        <Text>Hai, namaku Adam, biasa dipanggil Arthur!</Text>
                    </View>
                    <View style={styles.flexChild}>
                        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
                               style={styles.images}
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
                        <Text style={styles.margin}>
                            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                        </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const logo = {
    // uri: 'https://reactnative.dev/img/tiny_logo.png',
    uri: './img/React-icon2.png',
    width: 64,
    height: 64,
};

const styles = StyleSheet.create({
    flexParent: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexChild: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    margin: {
        margin: 10,
    },
    fontWeightBold: {
        fontWeight: 'bold',
    },
    images: {
        width: 200,
        height: 200,
    },
    backgroundImages: {
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 72,
        height: 64,
    },
});

