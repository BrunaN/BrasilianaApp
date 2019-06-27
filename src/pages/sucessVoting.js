import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux';
import * as playersActions from '../actions/players';
import { connect } from 'react-redux';

class SucessVoting extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.textConfirm}>Voto confirmado!</Text>
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        onPress={() => {
                            if (this.props.players.playersP == 0) {
                                navigate('Result')
                            }else{
                                navigate('Voting')
                            }
                        }}
                        color="transparent"
                        style={styles.button}>
                        <Text style={styles.text}>CONTINUAR A VOTAÇÃO</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SucessVoting)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48B091',
    },
    textConfirm: {
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