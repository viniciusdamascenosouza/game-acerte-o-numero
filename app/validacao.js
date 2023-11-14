function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;

  if (verificaEntrada(numero)) {
    console.log("Valor inválido");
  }
  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    console.log(`Valor inválido: O Número Secreto precisa estar entre ${menorValor} e ${maiorValor}`)
  }
}

function verificaEntrada(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}
