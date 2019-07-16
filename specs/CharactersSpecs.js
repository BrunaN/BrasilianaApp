export default function (spec) {
    spec.describe('Escutando os personagens', function () {
        spec.it('click nos personagens', async function () {
            await spec.exists('Characters.Button');
            // await spec.notExists('Characters.Button');
        })
    });
}