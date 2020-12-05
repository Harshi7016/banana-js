var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#text-input');
var outputDiv = document.querySelector('#outputDiv');

var serverUrl = 'https://api.funtranslations.com/translate/minion.json';

const getTranslationURL = (text) => {
  return serverUrl + '?' + 'text=' + text;
};

const errorHandler = (error) => {
  console.log('error occured' + error);
  alert('Something went wrong, try after sometime');
};
const clickHandler = () => {
  // assigning value from input text to inputText
  let inputText = txtInput.value;

  //calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
};

btnTranslate.addEventListener('click', clickHandler);
