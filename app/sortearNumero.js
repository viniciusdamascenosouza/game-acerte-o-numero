const numeroSecreto = gerarNumeroSecreto();

function gerarNumeroSecreto() {
  return parseInt(Math.random() * 100);
}

console.log(numeroSecreto);

const menorValor = 9;
const maiorValor = 900;

const elementoMenorValor = document.querySelector("#menor-valor");
elementoMenorValor.innerHTML = `${menorValor}`;

const elementoMaiorValor = document.querySelector("#maior-valor");
elementoMaiorValor.innerHTML = `${maiorValor}`;
