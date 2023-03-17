// Pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        // esconder imagem ativa do fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // fazer aparecer a imagem de fundo correspondente ao botao clicado
        imagens[indice].classList.add('ativa');
    })
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
