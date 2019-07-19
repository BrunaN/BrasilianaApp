export default function (spec) {

    spec.describe('Escutando os personagens', function () {
        spec.it('Verificando a existência dos cinco personagens do jogo', async function () {
            await spec.exists('Main.Button');
            await spec.press('Main.Button');
            await spec.exists('Characters.Professor');
            await spec.exists('Characters.Advogada');
            await spec.exists('Characters.Prefeito');
            await spec.exists('Characters.Empresário');
            await spec.exists('Characters.Médica');
            await spec.exists('Characters.ButtonConfirm');
        });
    });

    spec.describe('Realizando votação', function () {
        spec.it('Verificando a existência do personagem professor e advogada, selecionando os dois para a partida ' + 
        'votando duas vezes no professor e verificando se este ganhou a partida', async function () {
            await spec.press('Main.Button');
            await spec.exists('Characters.Professor');
            await spec.press('Characters.Professor');
            await spec.exists('Characters.Advogada');
            await spec.press('Characters.Advogada');
            await spec.press('Characters.ButtonConfirm');
            await spec.exists('Voting.Professor');
            await spec.press('Voting.Professor');
            await spec.exists('Voting.Advogada');
            await spec.pause(2000);
            await spec.exists('SucessVoting.Button');
            await spec.press('SucessVoting.Button');
            await spec.exists('Voting.Professor');
            await spec.press('Voting.Professor');
            await spec.pause(2000);
            await spec.press('SucessVoting.Button');
            await spec.pause(1000);
            await spec.exists('Result.Professor');
            await spec.exists('Result.Finalizar');
            await spec.press('Result.Finalizar');
        });
    });

    spec.describe('Realizando empate', function () {
        spec.it('Verificando a existência do personagem médica, empresario, prefeito e advogada, selecionando-os para a partida ' + 
        'votando duas vezes na advogada e na médica, verificando se houve o empate', async function () {
            await spec.press('Main.Button');
            await spec.press('Characters.Advogada');
            await spec.press('Characters.Médica');
            await spec.press('Characters.Prefeito');
            await spec.press('Characters.Empresário');
            await spec.press('Characters.ButtonConfirm');
            await spec.notExists('Voting.Professor');
            await spec.exists('Voting.Advogada');
            await spec.exists('Voting.Prefeito');
            await spec.exists('Voting.Empresário');
            await spec.exists('Voting.Médica');
            await spec.press('Voting.Advogada');
            await spec.press('SucessVoting.Button');
            await spec.press('Voting.Médica');
            await spec.press('SucessVoting.Button');
            await spec.press('Voting.Médica');
            await spec.press('SucessVoting.Button');
            await spec.press('Voting.Advogada');
            await spec.press('SucessVoting.Button');
            await spec.exists('Result.TextEmpate');
            await spec.exists('Result.ButtonDesempate');
            await spec.notExists('Result.Finalizar');
        });
    });

    spec.describe('Realizando um desempate', function () {
        spec.it('Selecionando as personagens advogada e médica para a partida ' + 
        'votando na advogada e na médica, verificando se houve o empate, votando na médica duas vezes, verificando o resultado', async function () {
            await spec.press('Main.Button');
            await spec.press('Characters.Advogada');
            await spec.press('Characters.Médica');
            await spec.press('Characters.ButtonConfirm');
            await spec.press('Voting.Advogada');
            await spec.press('SucessVoting.Button');
            await spec.press('Voting.Médica');
            await spec.press('SucessVoting.Button');
            await spec.exists('Result.TextEmpate');
            await spec.press('Result.ButtonDesempate');
            await spec.exists('Draw.View');
            await spec.exists('Draw.Médica');
            await spec.exists('Draw.Advogada');
            await spec.press('Draw.Médica');
            await spec.press('SucessVoting.Button');
            await spec.pause(2000);
            await spec.press('Voting.Médica');
            await spec.press('SucessVoting.Button');
            await spec.notExists('Result.ButtonDesempate');
            await spec.exists('Result.Finalizar');
        });
    });

}