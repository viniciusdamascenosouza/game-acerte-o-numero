const chuteElemento = document.querySelector("#chute");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", (eventoEscutado) => {
  //   console.log(eventoEscutado.results[0][0].transcript);
  const chute = eventoEscutado.results[0][0].transcript;
  exibeChute(chute);
  verificaSeOChutePossuiUmValorValido(chute);
});

function exibeChute(chute) {
  chuteElemento.innerHTML = `<div>
                              <h2>Você disse:</h2>
                             </div>
                             <div class="box-div">
                              <span class="box">${chute}</span>
                             </div>
                             `;
}

recognition.addEventListener("end", () => recognition.start());
