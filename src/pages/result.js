import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, TouchableOpacity, Image } from 'react-native';

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
        let votes = 0;
        let player;
        let aux = this.state.draw;

        for (let key in this.props.players) {
            if (key != 'playersTotal' && key != 'playersP') {
                if (this.props.players[key] > votes) {
                    votes = this.props.players[key];
                    player = key;
                }
            }
        }

        for (let key in this.props.players) {
            if (key != 'playersTotal' && key != 'playersP') {
                if (votes != 0 && this.props.players[key] == votes) {
                    switch (key) {
                        case 'professorVotes':
                            aux.push(1)
                            break;
                        case 'advogadoVotes':
                            aux.push(2)
                            break;
                        case 'prefeitoVotes':
                            aux.push(3)
                            break;
                        case 'empresarioVotes':
                            aux.push(4)
                            break;
                        case 'medicoVotes':
                            aux.push(5)
                            break;
                    }
                    if (aux.length > 1) {
                        this.setState({
                            draw: aux,
                            isDraw: true
                        });
                    }
                }
            }

        }

        if (aux.length == 1) {
            switch (player) {
                case 'professorVotes':
                    this.setState({
                        playerEliminated: this.state.characters[0]
                    });
                    break;
                case 'advogadoVotes':
                    this.setState({
                        playerEliminated: this.state.characters[1]
                    });
                    break;
                case 'prefeitoVotes':
                    this.setState({
                        playerEliminated: this.state.characters[3]
                    });
                    break;
                case 'empresarioVotes':
                    this.setState({
                        playerEliminated: this.state.characters[4]
                    });
                    break;
                case 'medicoVotes':
                    this.setState({
                        playerEliminated: this.state.characters[5]
                    });
                    break;
            }
        }

    }

    state = {
        characters: [
            {
                "id": 1,
                "name": "Professor",
                "image": require('../img/professor.png')
            },
            {
                "id": 2,
                "name": "Advogada",
                "image": require('../img/advogado.png')
            },
            {
                "id": 3,
                "name": "Prefeito",
                "image": require('../img/prefeito.png')
            },
            {
                "id": 4,
                "name": "Empresário",
                "image": require('../img/empresario.png')
            },
            {
                "id": 5,
                "name": "Médica",
                "image": require('../img/medico.png')
            }
        ],
        playerEliminated: {},
        draw: [],
        isDraw: false
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            this.state.isDraw ?
                <View style={styles.container}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#E23A33"
                    />
                    <Text style={styles.textResult}>
                        Houve um empate!
                    </Text>
                    <Image
                        style={styles.image}
                        source={require('../img/megafone.png')}
                    />
                    <Text style={styles.textResult}>
                        Chegou a hora de ver os mais votados!
                    </Text>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate('Draw', { characters: this.state.draw });
                                this.props.faultVotes(this.props.players.playersTotal);
                                this.props.clean();
                            }}
                            color="transparent"
                            style={styles.button}>
                            <Text style={styles.text}>DESEMPATAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={styles.container}>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#E23A33"
                    />
                    <Text style={styles.textResult}>
                        Resultado do julgamento foi que o(a)
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
                        é acusado(a) de corrupção!
                    </Text>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate('Main');
                            }}
                            color="transparent"
                            style={styles.button}>
                            <Text style={styles.text}>FINALIZAR O JULGAMENTO</Text>
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
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: '#ffff',
    },
    image: {
        width: 150,
        height: 150
    },
    buttonView: {
        margin: 20,
        color: '#fff',
    },
    item: {
        width: 220,
        margin: 15,
        backgroundColor: '#FDFBE0',
        borderRadius: 6,
        shadowColor: '#6B557C',
        shadowOffset: { width: 230, height: 200 },
        shadowRadius: 1,
        elevation: 10,
        shadowOpacity: 0.9,
    },
    itemText: {
        color: '#272A2D',
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    itemImage: {
        height: 180,
        width: 220,
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
        textAlign: 'center',
        margin: 30,
        borderWidth: 2,
        borderColor: '#FDFBE0',
        borderRadius: 2
    }
});