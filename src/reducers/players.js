export default function players(state = {
    playersP: 0,
    advogadoVotes: 0,
    medicoVotes: 0,
    empresarioVotes: 0,
    professorVotes: 0,
    prefeitoVotes: 0,
}, action) {
    switch (action.type) {
        case 'COUNTER_PLAYERS':
            return {
                playersTotal: action.length,
                playersP: action.length,
                ...state,
            };
        case 'DECREMENT':
            return {
                ...state,
                playersTotal: state.playersTotal - 1,
            };
        case 'CLEAN':
            return {
                ...state,
                advogadoVotes: 0,
                medicoVotes: 0,
                empresarioVotes: 0,
                professorVotes: 0,
                prefeitoVotes: 0,
            }
        case 'ADVOGADO_VOTES':
            return {
                ...state,
                advogadoVotes: state.advogadoVotes + 1,
            };
        case 'MEDICO_VOTES':
            return {
                ...state,
                medicoVotes: state.medicoVotes + 1,
            };
        case 'EMPRESARIO_VOTES':
            return {
                ...state,
                empresarioVotes: state.empresarioVotes + 1,
            };
        case 'PROFESSOR_VOTES':
            return {
                ...state,
                professorVotes: state.professorVotes + 1
            };
        case 'PREFEITO_VOTES':
            return {
                ...state,
                prefeitoVotes: state.prefeitoVotes + 1
            }
        default:
            return state;
    }
}