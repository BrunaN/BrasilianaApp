export function counterPlayers(length){
    return {
        type: 'COUNTER_PLAYERS',
        length,
    }
}

export function decrementing(){
    return {
        type: 'DECREMENT',
    }
}

export function medicoVotes(){
    return {
        type: 'MEDICO_VOTES'
    }
}
export function empresarioVotes(){
    return {
        type: 'EMPRESARIO_VOTES'
    }
}
export function professorVotes(){
    return {
        type: 'PROFESSOR_VOTES'
    }
}
export function prefeitoVotes(){
    return {
        type: 'PREFEITO_VOTES'
    }
}
export function advogadoVotes(){
    return {
        type: 'ADVOGADO_VOTES'
    }
}
export function clean(){
    return{
        type: 'CLEAN'
    }
}
export function faultVotes(l){
    return{
        type: 'FAULT',
        l,
    }
}