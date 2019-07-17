import players from '../src/reducers/players';

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