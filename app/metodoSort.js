const btnPreco = document.querySelector('#btnOrdenarPorPreco')

btnPreco.addEventListener('click', ordenarPreco)

function ordenarPreco() {
    let listroOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(listroOrdenados)
}