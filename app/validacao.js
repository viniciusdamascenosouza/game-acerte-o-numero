const pagina = document.querySelector("body");

function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;

  if (verificaEntrada(numero)) {
    chuteElemento.innerHTML += "<div>Valor inválido</div>";
    return;
  }
  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    chuteElemento.innerHTML += `
    <div class="valor-invalido">
      Fale um número entre ${menorValor} e ${maiorValor}
    </div>`;
    return;
  }
  if (numero === numeroSecreto) {
    pagina.setAttribute("data-contexto", "comemoracao");
    document.body.innerHTML = `
          <h4 class="estilos-comemoracao id="estilos-comemoracao >Você acertou!</h4>
          <h4 class="estilos-comemoracao id="estilos-comemoracao>O número secreto era ${numeroSecreto}</h4>
    `;
  } else if (numero > numeroSecreto) {
    chuteElemento.innerHTML += `<p>O número secreto é menor <i class="fa-solid fa-down-long"></i></p>`;
  } else {
    chuteElemento.innerHTML += `<p>O número secreto é maior <i class="fa-solid fa-up-long"></i></p>`;
  }
}

function verificaEntrada(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}
