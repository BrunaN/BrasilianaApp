import players from '../src/reducers/players';

let state = {
    playersTotal: 0,
    advogadoVotes: 0,
    medicoVotes: 0,
    empresarioVotes: 0,
    professorVotes: 0,
    prefeitoVotes: 0
}

it('Teste do contador de jogadores da partida', () => {
    let playersState = players(state, { type: 'COUNTER_PLAYERS' })
    expect(playersState.playersTotal).toEqual(1);
})

it('Teste de decrementação do contador', () => {
    let playersState = players({
        playersTotal: 5,
        advogadoVotes: 0,
        medicoVotes: 0,
        empresarioVotes: 0,
        professorVotes: 0,
        prefeitoVotes: 0
    }, { type: 'DECREMENT_PLAYERS' })
    expect(playersState.playersTotal).toEqual(4);
})

it('Teste de limpagem do state', () => {
    let playersState = players(state, { type: 'CLEAN' })
    expect(playersState.advogadoVotes).toEqual(0);
    expect(playersState.medicoVotes).toEqual(0);
    expect(playersState.empresarioVotes).toEqual(0);
    expect(playersState.professorVotes).toEqual(0);
    expect(playersState.prefeitoVotes).toEqual(0);
})

it('Teste de limpagem do número de jogadores da partida', () => {
    let playersState = players(state, { type: 'CLEAN_TOTAL' })
    expect(playersState.playersTotal).toEqual(0);
})

it('Teste de votos no advogado', () => {
    let playersState = players(state, { type: 'ADVOGADO_VOTES' })
    expect(playersState.advogadoVotes).toEqual(1);
})

it('Teste de votos no medico', () => {
    let playersState = players(state, { type: 'MEDICO_VOTES' })
    expect(playersState.medicoVotes).toEqual(1);
})

it('Teste de votos no empresario', () => {
    let playersState = players(state, { type: 'EMPRESARIO_VOTES' })
    expect(playersState.empresarioVotes).toEqual(1);
})

it('Teste de votos no professor', () => {
    let playersState = players(state, { type: 'PROFESSOR_VOTES' })
    expect(playersState.professorVotes).toEqual(1);
})

it('Teste de votos no prefeito', () => {
    let playersState = players(state, { type: 'PREFEITO_VOTES' })
    expect(playersState.prefeitoVotes).toEqual(1);
})

it('Teste de votos no prefeito + 1', () => {
    let playersState = players({
        playersTotal: 0,
        advogadoVotes: 0,
        medicoVotes: 0,
        empresarioVotes: 0,
        professorVotes: 0,
        prefeitoVotes: 1
    }, { type: 'PREFEITO_VOTES' })
    expect(playersState.prefeitoVotes).toEqual(2);
})

it('Teste de votos no professor + 1', () => {
    let playersState = players({
        playersTotal: 0,
        advogadoVotes: 0,
        medicoVotes: 0,
        empresarioVotes: 0,
        professorVotes: 1,
        prefeitoVotes: 0
    }, { type: 'PROFESSOR_VOTES' })
    expect(playersState.professorVotes).toEqual(2);
})
