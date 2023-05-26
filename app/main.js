let livros = []
let endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getLivrosAPI()


async function getLivrosAPI() {
    const res = await fetch(endPointApi)
    livros = await res.json()
    let livrosDesconto = aplicaDesconto(livros)
    exibirLivros(livrosDesconto)
}
