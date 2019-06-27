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

    componentDidMount() {
        this.props.clean();
    }

    state = {
        players: [
            {
                "id": 1,
                "name": "Professor",
                "image": require('../img/professor.png'),
                "active": false
            },
            {
                "id": 2,
                "name": "Advogada",
                "image": require('../img/advogado.png'),
                "active": false
            },
            {
                "id": 3,
                "name": "Prefeito",
                "image": require('../img/prefeito.png'),
                "active": false
            },
            {
                "id": 4,
                "name": "Empresário",
                "image": require('../img/empresario.png'),
                "active": false
            },
            {
                "id": 5,
                "name": "Médica",
                "image": require('../img/medico.png'),
                "active": false
            }
        ],
        characters: []
    }

    renderItem = ({ item }) => (
        <View style={item.active ? styles.containerItemActive : styles.containerItem}>
            <TouchableOpacity
                onPress={() => {

                    item.active = true;
                    this.state.players[item.id - 1].active = true;
                    this.forceUpdate()

                    let x = this.state.characters;
                    if (x.length > 0) {
                        for (let i = 0; i < x.length; i++) {
                            if (x[i] == item.id) {
                                x.splice(i, 1)
                                this.props.decrementPlayers();
                            }
                        }
                    }

                    x.push(item.id)
                    this.props.counterPlayers();
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
                    extraData={this.state}
                    keyExtractor={player => player.id}
                    renderItem={this.renderItem}
                />
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        onPress={() => {
                            navigate('Voting', { characters: this.state.characters })
                            this.props.faultVotes(this.state.characters.length);
                            console.log(this.props)
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
        fontSize: 22,
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
        width: 150,
        margin: 15,
        backgroundColor: '#FDFBE0',
        borderRadius: 6
    },
    containerItemActive: {
        width: 152,
        margin: 15,
        backgroundColor: '#FDFBE0',
        shadowColor: '#6B557C',
        shadowOffset: { width: 160, height: 200 },
        shadowRadius: 1,
        elevation: 10,
        shadowOpacity: 0.9,
        borderWidth: 1,
        borderColor: '#6B557C',
        borderRadius: 6
    },
    itemText: {
        color: '#272A2D',
        padding: 10,
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    itemImage: {
        height: 100,
        width: 150,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
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
        margin: 10,
        borderWidth: 2,
        borderColor: '#FDFBE0',
        borderRadius: 2
    }
});