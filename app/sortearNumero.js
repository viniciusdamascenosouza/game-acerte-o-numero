const numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto() {
  return parseInt(Math.random() * 100);
}

console.log(numeroSecreto);

const menorValor = 1;
const maiorValor = 100;

const elementoMenorValor = document.querySelector("#menor-valor");
elementoMenorValor.innerHTML = `${menorValor}`;

const elementoMaiorValor = document.querySelector("#maior-valor");
elementoMaiorValor.innerHTML = `${maiorValor}`;
