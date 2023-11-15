const numeroSecreto = gerarNumeroSecreto();
const botaoRestart = document.querySelector(".botao-restart");

function gerarNumeroSecreto() {
  return parseInt(Math.random() * 100);
}

console.log(`Número Secreto: ${numeroSecreto}`);

const menorValor = 1;
const maiorValor = 100;

const elementoMenorValor = document.querySelector("#menor-valor");
elementoMenorValor.innerHTML = `${menorValor}`;

const elementoMaiorValor = document.querySelector("#maior-valor");
elementoMaiorValor.innerHTML = `${maiorValor}`;


function recarregarPagina() {
  window.location.reload();
}

botaoRestart.addEventListener("click", () => {
  recarregarPagina();
});
