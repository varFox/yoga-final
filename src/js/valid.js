function valid() {
  const number = document.querySelectorAll('.tel-number');
  let pos = 0;
  
  number.forEach(item => {
    item.addEventListener('keydown', (e) => {
      validNumber(e, item, pos);
    });
    item.addEventListener('focus', () => {
      if (pos == 0) {
        item.value = '+7(';
        pos = 3;
      }
    });
    item.addEventListener('blur', () => {
      if (item.value.slice(-1) == '(') {
        item.value = '';
        pos = 0;
      }
    });
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
}

module.exports = valid;