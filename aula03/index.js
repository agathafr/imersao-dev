var numeroSecreto = parseInt(Math.random() * 11);

function Chutar(){
    var resultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);

    if(chute == numeroSecreto) {
        resultado.innerHTML = "Você acertou!";
    } else if (chute > 10 || chute < 0) {
        resultado.innerHTML = "Você deve digitar um número de 0 a 10!";
    } else {
        resultado.innerHTML = "Você errou!";
    }
}