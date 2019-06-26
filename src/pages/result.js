import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { bindActionCreators } from 'redux';
import * as playersActions from '../actions/players';
import { connect } from 'react-redux';

class Result extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.players.prefeitoVotes > this.props.players.medicoVotes &&
            this.props.players.prefeitoVotes > this.props.players.advogadoVotes &&
            this.props.players.prefeitoVotes > this.props.players.empresarioVotes &&
            this.props.players.prefeitoVotes > this.props.players.professorVotes) {
            this.setState({
                playerEliminated: this.state.characters[2]
            });
        } else if (this.props.players.medicoVotes > this.props.players.professorVotes &&
            this.props.players.medicoVotes > this.props.players.advogadoVotes &&
            this.props.players.medicoVotes > this.props.players.empresarioVotes &&
            this.props.players.medicoVotes > this.props.players.prefeitoVotes) {
            this.setState({
                playerEliminated: this.state.characters[4]
            });
        } else if (this.props.players.empresarioVotes > this.props.players.professorVotes &&
            this.props.players.empresarioVotes > this.props.players.advogadoVotes &&
            this.props.players.empresarioVotes > this.props.players.medicoVotes &&
            this.props.players.empresarioVotes > this.props.players.prefeitoVotes) {
            this.setState({
                playerEliminated: this.state.characters[3]
            });
        } else if (this.props.players.professorVotes > this.props.players.empresarioVotes &&
            this.props.players.professorVotes > this.props.players.advogadoVotes &&
            this.props.players.professorVotes > this.props.players.medicoVotes &&
            this.props.players.professorVotes > this.props.players.prefeitoVotes) {
            this.setState({
                playerEliminated: this.state.characters[0]
            });
        } else {
            //advogado
            this.setState({
                playerEliminated: this.state.characters[1]
            });
        }

    }

    state = {
        characters: [
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
        playerEliminated: {

        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.textResult}>
                    Resultado do julgamento foi que o
                </Text>
                <View style={styles.item}>
                    <Image
                        style={styles.itemImage}
                        source={this.state.playerEliminated.image}
                    />
                    <Text style={styles.itemText}>
                        {this.state.playerEliminated.name}
                    </Text>
                </View>
                <Text style={styles.textResult}>
                    é o corrupto!
                </Text>
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        onPress={() => {
                            navigate('Main')
                        }
                        }
                        color="transparent"
                        style={styles.button}>
                        <Text style={styles.text}>FINALIZAR PARTIDA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    players: state.players,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(playersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Result)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E23A33',
    },
    textResult: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffff',
    },
    buttonView: {
        margin: 20,
        color: '#fff',
    },
    item: {
    },
    itemText: {
        color: '#272A2D',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    itemImage: {
        height: 110,
        width: 110
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
        textAlign: 'center',
        margin: 15,
        borderWidth: 1,
        borderColor: '#FDFBE0',
        borderRadius: 2
    }
});