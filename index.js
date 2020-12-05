var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#text-input');

const clickHandler = () => {
  console.log('clicked');
  console.log(txtInput.value);
};

btnTranslate.addEventListener('click', clickHandler);
