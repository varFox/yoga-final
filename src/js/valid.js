function valid() {
  const number = document.querySelector('.popup-form__input'),
        telNumber = document.querySelectorAll('#form input')[1];
  let pos = 0,
      telPos = telNumber.value.length;

  number.addEventListener('keydown', (e) => {
    validNumber(e, number, pos);
  });

  telNumber.addEventListener('keydown', (e) => {
    validNumber(e, telNumber, telPos);
  });

  function validNumber(e, input, pos) {
    pos = input.value.length;
    e.preventDefault();
    if (e.key.match(/[0-9]/) && pos < 16 && (pos == '13' || pos == '10')) {
      input.value += ' ' + e.key;
      pos = input.value.length;
    } else if (e.key.match(/[0-9]/) && pos < 16) {
      input.value += e.key;
      pos = input.value.length;
      if (pos == '6') {
        input.value += ')';
      } else if (pos == '10' || pos == '13') {
        input.value += ' ';
      }
      pos = input.value.length;
    }

    if (e.key == 'Backspace') {
      if (pos == '12' || pos == '15' || pos == '7') {
        input.value = input.value.substring(0, pos - 2);
      } else if (pos > 3) {
        input.value = input.value.substring(0, pos - 1);
      }
      pos = input.value.length;
    }
    return pos;
  }
  number.addEventListener('focus', () => {
    if (pos == 0) {
      number.value = '+7(';
      pos = 3;
    }
  });
  number.addEventListener('blur', () => {
    if (number.value.slice(-1) == '(') {
      number.value = '';
      pos = 0;
    }
  });
  telNumber.addEventListener('focus', () => {
    if (telPos == 0) {
      telNumber.value = '+7(';
      telPos = 3;
    }
  });
  telNumber.addEventListener('blur', () => {
    if (telNumber.value.slice(-1) == '(') {
      telNumber.value = '';
      telPos = 0;
    }
  });
}

module.exports = valid;