var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#text-input');
var outputDiv = document.querySelector('#outputDiv');
const clickHandler = () => {
  outputDiv.innerText = 'asaasfafa' + txtInput.value;
};

btnTranslate.addEventListener('click', clickHandler);
