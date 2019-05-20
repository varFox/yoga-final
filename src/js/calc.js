const calc = () => {

  let inputs = document.querySelectorAll('.counter-block-input'),
      place = document.getElementById('select'),
      totalValue = document.getElementById('total');
  totalValue.textContent = '0';

  const validCalc = (input, e) => {
    e.preventDefault();
    if (e.key.match(/[0-9]/) && input.value.length < 3) {
      if (input.value.length == 0 && e.key.match(/[0]/)) input.value = ''
      else input.value += e.key;
    } else if (e.key == 'Backspace') input.value = '';
  }

  const calcInput = () => {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
      if (+inputs[i].value > 0) {
        sum += +inputs[i].value;
      } else {
        sum = 0;
        break;
      }
    }
    sum = sum * 4000 * place.value;
    if (sum > 0) {
      let a = sum - 500;
      if (a > 0) {
        let printNum = setInterval(() => {
          if (a < sum) {
            a += 5;
            totalValue.textContent = a;
          } else {
            clearInterval(printNum);
          }
        }, 5);
      } else {
        totalValue.textContent = '0';
      }
    }
  }

  inputs.forEach(input => {
    input.addEventListener('keydown', event => {
      validCalc(input, event);
    });
    input.addEventListener('blur', () => {
      calcInput();
    });
  });
  place.addEventListener('change', () => {
    calcInput();
  });

}
module.exports = calc;