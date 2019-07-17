export default function (spec) {

    spec.describe('Escutando os personagens', function () {
        spec.it('Verificando a existência dos cinco personagens do jogo', async function () {
            await spec.press('Main.Button');
            await spec.exists('Characters.Professor');
            await spec.exists('Characters.Advogada');
            await spec.exists('Characters.Prefeito');
            await spec.exists('Characters.Empresário');
            await spec.exists('Characters.Médica');
        });
    });

    spec.describe('Realizando votação', function () {
        spec.it('Verificando a existência do personagem professor e advogada selecionando os dois para a partida ' + 
        'votando duas vezes no professor e verificando se este ganhou a partida', async function () {
            await spec.press('Main.Button');
            await spec.exists('Characters.Professor');
            await spec.press('Characters.Professor');
            await spec.exists('Characters.Advogada');
            await spec.press('Characters.Advogada');
            await spec.exists('Characters.ButtonConfirm');
            await spec.press('Characters.ButtonConfirm');
            await spec.exists('Voting.Professor');
            await spec.press('Voting.Professor');
            await spec.exists('SucessVoting.Button');
            await spec.press('SucessVoting.Button');
            await spec.exists('Voting.Advogada');
            await spec.exists('Voting.Professor');
            await spec.press('Voting.Professor');
            await spec.press('SucessVoting.Button');
            await spec.exists('Result.Professor');
            await spec.exists('Result.Finalizar');
            await spec.press('Result.Finalizar');
        });
    });

    spec.describe('Realizando empate', function () {
        spec.it('Verificando a existência do personagem médica, empresario, prefeito e advogada, selecionando-os para a partida ' + 
        'votando duas vezes no advogada e na médica, verificando se houve o empate', async function () {
            await spec.press('Main.Button');
            await spec.exists('Characters.Advogada');
            await spec.press('Characters.Advogada');
            await spec.exists('Characters.Médica');
            await spec.press('Characters.Médica');
            await spec.exists('Characters.Prefeito');
            await spec.press('Characters.Prefeito');
            await spec.exists('Characters.Empresário');
            await spec.press('Characters.Empresário');
            await spec.exists('Characters.ButtonConfirm');
            await spec.press('Characters.ButtonConfirm');
            await spec.press('Voting.Advogada');
            await spec.press('SucessVoting.Button');
            await spec.press('Voting.Medica');
            await spec.press('SucessVoting.Button');
            await spec.press('Voting.Medica');
            await spec.press('SucessVoting.Button');
            await spec.press('Voting.Advogada');
            await spec.press('SucessVoting.Button');
            await spec.exists('Result.TextEmpate');
            await spec.exists('Result.ButtonDesempate');
        });
    });

}