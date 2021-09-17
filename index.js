function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value
    if (filmeFavorito.endsWith(".jpg")) {
        var elementoFilmeFavorito = "img src=" + campoFilmeFavorito + ">"
        var elementoListaFilmes = document.getElementById("listaFilmes")
        elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito
    } else {
        console.error("Endereço de filme inválido!")
    }
    document.getElementById("filme").value = ""
}