const disponivel =  document.querySelector('#btnLivrosDisponiveis')

disponivel.addEventListener('click', () => disponivilidade())

function disponivilidade() {
    let livrosFiltros = livros.filter(livro => livro.quantidade > 0)
    const valorTotal = calcularLivrosDisponiveis(livrosFiltros)
    exibirLivros(livrosFiltros)
    exibirSpan(valorTotal)
}

function calcularLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}

function exibirSpan(valorTotal) {
    spanLivros.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}

//não é a melhor forma de fazer, mas foi a minha gambi q deu certo :)