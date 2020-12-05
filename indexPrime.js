var txtNumber = document.querySelector('#text-number');
var outputDivNumber = document.querySelector('#outputDivNumber');
var btnCheckPrime = document.querySelector('#btn-check-prime');

if (btnCheckPrime.innerText === '👇Check For Prime Number👇') {
  document.body.style.background = 'grey';
}

const checkForPrimeNumber = () => {
  let valueInput = Number(txtNumber.value);
  console.log(valueInput);
  let count = 0;
  if (valueInput === 1) {
    outputDivNumber.innerText = '1 is neither prime nor composite';
  } else if (valueInput > 1) {
    for (let i = 2; i < valueInput; i++) {
      if (valueInput % i === 0) {
        count++;
      }
      if (count !== 0) {
        outputDivNumber.innerText = 'Not a Prime Number';
      } else {
        outputDivNumber.innerText = 'Prime Number';
      }
    }
  } else {
    outputDivNumber.innerText = 'Please enter positive number';
  }
};
btnCheckPrime.addEventListener('click', checkForPrimeNumber);
