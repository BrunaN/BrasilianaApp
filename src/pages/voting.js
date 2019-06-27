import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux';
import * as playersActions from '../actions/players';
import { connect } from 'react-redux';

class Voting extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        header: null,
    };

    componentDidMount() {
        let x = [];
        for (let i = 0; i < this.props.navigation.state.params.characters.length; i++) {
            for (let j = 0; j < this.state.characters.length; j++) {
                if (this.props.navigation.state.params.characters[i] == this.state.characters[j].id) {
                    x.push(this.state.characters[j])
                }
            }
        }
        this.setState({
            players: x
        });
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
        players: []
    }

    renderItem = ({ item }) => (
        <View style={styles.containerItem}>
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('SucessVoting', { id: item.id })
                    this.props.decrementing();
                    switch (item.id) {
                        case 1:
                            this.props.professorVotes();
                            break;
                        case 2:
                            this.props.advogadoVotes();
                            break;
                        case 3:
                            this.props.prefeitoVotes();
                            break;
                        case 4:
                            this.props.empresarioVotes();
                            break;
                        case 5:
                            this.props.medicoVotes();
                            break;
                    }
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
        return (
            <View style={styles.container}>
                <Text style={styles.textSelect}>
                    Acuse o corrupto!
                    {this.props.players.playersTotal}
                    {this.props.players.playersP}
                    oi
                    {this.props.players.professorVotes}
                    {this.props.players.advogadoVotes}
                    {this.props.players.medicoVotes}
                    {this.props.players.prefeitoVotes}
                    {this.props.players.empresarioVotes}
                </Text>
                <FlatList
                    numColumns={2}
                    columnWrapperStyle={styles.list}
                    data={this.state.players}
                    keyExtractor={player => player.id}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
    players: state.players,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(playersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Voting)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#48B091',
        padding: 15,
    },
    textSelect: {
        fontSize: 25,
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
    }
});