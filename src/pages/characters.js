import React, { Component } from 'react';
import { Image, Button, View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux';
import * as playersActions from '../actions/players';
import { connect } from 'react-redux';

class Characters extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null,
    };

    state = {
        players: [
            {
                "id": 1,
                "name": "Professor",
                "image": require('../img/dinheiro.png')
            },
            {
                "id": 2,
                "name": "Advogado",
                "image": require('../img/dinheiro.png')
            },
            {
                "id": 3,
                "name": "Prefeito",
                "image": require('../img/dinheiro.png')
            },
            {
                "id": 4,
                "name": "Empresário",
                "image": require('../img/dinheiro.png')
            },
            {
                "id": 5,
                "name": "Médico",
                "image": require('../img/dinheiro.png')
            }
        ],
        characters: []
    }

    renderItem = ({ item }) => (
        <View style={styles.containerItem}>
            <TouchableOpacity
                onPress={() => {
                    let x = this.state.characters;
                    x.push(item.id)
                    this.setState({ characters: x })
                }
                }>
                <Image
                    style={styles.itemImage}
                    source={item.image}
                />
                <Text style={styles.itemText}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        </View>
    );

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.textSelect}>
                    Selecione os participantes da partida
                </Text>
                <FlatList
                    numColumns={2}
                    columnWrapperStyle={styles.list}
                    data={this.state.players}
                    keyExtractor={player => player.id}
                    renderItem={this.renderItem}
                />
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        onPress={() => {
                            navigate('Voting', { characters: this.state.characters })
                            this.props.counterPlayers(this.state.characters.length);
                        }
                        }
                        color="transparent"
                        style={styles.button}>
                        <Text style={styles.text}>COMFIRMAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    players: state.players,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(playersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Characters)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#48B091',
        padding: 15,
    },
    textSelect: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffff',
    },
    list: {
        flex: 1,
        justifyContent: "space-between"
    },
    containerItem: {
        flex: 1 / 2,
        margin: 15,
        backgroundColor: '#FDFBE0',
        borderWidth: 1,
        borderColor: '#FDFBE0',
        borderRadius: 6
    },
    itemText: {
        color: '#272A2D',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    itemImage: {
        height: 90,
        width: 100
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffff',
    },
    buttonView: {
        alignItems: 'center',
    },
    button: {
        width: 150,
        textAlign: 'center',
        margin: 15,
        borderWidth: 1,
        borderColor: '#FDFBE0',
        borderRadius: 2
    }
});