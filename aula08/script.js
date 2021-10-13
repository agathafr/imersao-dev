var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "https://i.pinimg.com/originals/34/9e/2a/349e2a4d065dcc55a417ac6f0528a5cf.jpg",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
}

var cartaGui = {
    nome: "Darth Vader",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/41i-0NH0q9L._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
}

var cartaPaulo = {
    nome: "Shiryu de dragão",
    imagem: "https://s.aficionados.com.br/imagens/shiryu.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
}

var cartas = [carta1, carta2, carta3]

var cartaMaquina = 0
var cartaJogador = 0

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]
    console.log(cartaMaquina)

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById("btnSortear").desabled = true
    document.getElementById("btnJogar").desablid = false

    exibirCartaJogador()
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var htmlResultado = document.getElementById("resultado")

    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (valorCartaJogador > valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>Você venceu!</p>"
    } else if (valorCartaMaquina > valorCartaJogador) {
        htmlResultado = "<p class='resultado-final'>A máquina venceu!</p>"
    } else {
        htmlResultado = "<p class='resultado-final'>Vocês empataram!</p>"
    }

    divResultado.innerHTML = htmlResultado

    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina()
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}