export default function (spec) {
    spec.describe('Escutando os personagens', function () {
        spec.it('Iniciando e verificando a existência dos personagens', async function () {
            await spec.press('Main.Button');
            await spec.exists('Characters.ButtonConfirm');
            await spec.exists('Characters.Professor');
            await spec.press('Characters.Professor');
            await spec.pause(2000);
            await spec.press('Characters.ButtonConfirm');
            await spec.pause(2000);
            await spec.exists('Voting.Professor');
        });
    });
}