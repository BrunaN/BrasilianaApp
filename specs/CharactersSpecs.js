export default function (spec) {
    spec.describe('Escutando os personagens', function () {
        spec.it('Iniciano e verificando a existência dos personagens', async function () {
            await spec.press('Main.Button');
            await spec.exists('Characters.ButtonConfirm');
        });
    });

    spec.describe('Click em botão confirma', function () {
        spec.it('Mostrar personagens votados', async function () {
            await spec.press('Characters.Professor');
            await spec.pause(2000);
            await spec.press('Characters.ButtonConfirm');
            await spec.exists('Voting.Professor');
            await spec.pause(2000);
            
        });
    });
}