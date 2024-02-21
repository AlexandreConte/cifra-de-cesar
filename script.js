const alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];

const campoMensagem = document.getElementById("para-criptografar");
const campoDeslocamento = document.getElementById("deslocamento");
const botao = document.getElementById("botao");
const form = document.getElementById("form");
const resp = document.getElementById("resposta");

for (let index = 0; index < alfabeto.length; index++) {
    const letra = alfabeto[index];
    const deslocamento = index;

    campoDeslocamento.innerHTML += `<option value="${deslocamento}">${letra}</option>`;
}

document.addEventListener("DOMContentLoaded", () => {
    botao.addEventListener("click", criptografar);
    form.addEventListener("submit", criptografar);
});

function criptografar(e) {
    e.preventDefault();
    const mensagem = campoMensagem.value;
    const array = mensagem.toUpperCase().split("");
    const deslocamento = +campoDeslocamento.value;

    const novoArray = [];
    for (let index = 0; index < array.length; index++) {
        const letraAtual = array[index];
        const novaLetra = trocarLetra(letraAtual, deslocamento);
        novoArray.push(novaLetra);
    }

    const mensagemCriptografada = novoArray.join("");
    resp.textContent = mensagemCriptografada;
    resp.classList.remove("invisivel");
}

function trocarLetra(letra, deslocamento) {
    const index = alfabeto.indexOf(letra);
    if (index === -1) {
        return letra;
    }
    const indexNovaLetra = (index + deslocamento) % alfabeto.length;
    const novaLetra = alfabeto[indexNovaLetra];
    return novaLetra;
}
