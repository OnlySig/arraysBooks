const botoesAll = document.querySelectorAll('.btn')

botoesAll.forEach(btn => btn.addEventListener('click', (event)=>{ 
    filtraLivros(event.target.value)
}))

function filtraLivros(parans) {
    let livrosFiltrados = livros.filter(livro => livro.categoria == parans)
    exibirLivros(livrosFiltrados)
}