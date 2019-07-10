import 'react-native';
import React from 'react';
import Characters from '../src/pages/characters';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../src/store';
import players from '../src/reducers/players';

test('Characters snapshop', () => {
    const snap = renderer.create(
        <Provider store={store}><Characters /></Provider>
    ).toJSON();
    expect(snap).toMatchSnapshot();
})

it('Test reducers', () => {
    let playersState = players({ 
        playersTotal: 0,
        advogadoVotes: 0,
        medicoVotes: 0,
        empresarioVotes: 0,
        professorVotes: 0,
        prefeitoVotes: 0,}, {type: 'COUNTER_PLAYERS'})

    expect(playersState.playersTotal).toEqual(1);
})

//-- -u (após alteração em algo do component)
// npm test nome-do-arquivo
// snapshot e reducers apenas :c
//comentar o navigate
