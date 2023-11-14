const chuteElemento = document.querySelector("#chute");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", (eventoEscutado) => {
  console.log(eventoEscutado.results[0][0].transcript);
  const chute = eventoEscutado.results[0][0].transcript;
  chuteElemento.innerHTML = `<div>
                                <h2>Você disse:</h2>
                             </div>
                             <div class="box-div">
                                <span class="box">${chute}</span>
                             </div>
                             <div>
                                <h2>O número secreto é maior <i class="fa-solid fa-up-long"></i></h2>
                             </div>`;
});
