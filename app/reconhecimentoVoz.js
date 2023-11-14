window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", (eventoEscutado) => {
  console.log(eventoEscutado.results[0][0].transcript);
});
