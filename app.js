const listenBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause')
const resumeBtn = document.querySelector('.resume')
const stopBtn = document.querySelector('.stop')
const selectEl = document.querySelector('select')

// console.log(selectEl);
const speech = new SpeechSynthesisUtterance();
let voices = null;

listenBtn.addEventListener('click', () => {
    const textValue = document.querySelector('textarea').value;
    speech.text = textValue;
    speechSynthesis.speak(speech);
})

pauseBtn.addEventListener('click', () => {
    const textValue = document.querySelector('textarea').value;
    speech.text = textValue;
    speechSynthesis.pause(speech);
})

resumeBtn.addEventListener('click', () => {
    const textValue = document.querySelector('textarea').value;
    speech.text = textValue;
    speechSynthesis.resume(speech);
})

stopBtn.addEventListener('click', () => {
    const textValue = document.querySelector('textarea').value;
    speech.text = textValue;
    speechSynthesis.cancel(speech);
})

speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();
    // console.log(voices);
    speech.voice = voices[0];
    voices.forEach((voice, i) => {
        return selectEl.options[i] = new Option(voice.name, i);  //Create new option and add to the select tag
    })
}

selectEl.addEventListener('change', () => {
    speech.voice = voices[selectEl.value]
})