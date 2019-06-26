import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Chegou a hora do jugalmento!</Text>
                <Text style={styles.text}>Descubra quem é o corrupto!</Text>
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        onPress={() => navigate('Characters')}
                        color="transparent"
                        style={styles.button}>
                        <Text style={styles.text}>COMEÇAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48B091',
    },
    welcome: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffff',
    },
    button: {
        margin: 20,
        borderWidth: 1,
        borderColor: '#FDFBE0',
        borderRadius: 2
    }
});