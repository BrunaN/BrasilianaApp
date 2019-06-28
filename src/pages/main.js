import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../img/backgroundImage.png')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Chegou a hora do jugalmento!</Text>
                    <Image
                        style={styles.image}
                        source={require('../img/megafone.png')}
                    />
                    <Text style={styles.text}>Descubra quem é o corrupto!</Text>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            onPress={() => navigate('Characters')}
                            color="transparent"
                            style={styles.button}>
                            <Text style={styles.textButton}>COMEÇAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffff',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffff',
    },
    image: {
        width: 150,
        height: 150
    },
    textButton: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffff',
    },
    button: {
        margin: 30,
        borderWidth: 2,
        borderColor: '#FDFBE0',
        borderRadius: 2
    }
});