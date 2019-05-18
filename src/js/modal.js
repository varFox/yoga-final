function modal() {
  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      popup = document.querySelector('.popup');


  function isMobile() {
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
      return true;
    }
    return false;
  }

  more.addEventListener('click', () => {
    overlay.style.display = 'block';
    if (navigator.userAgent.match(/MSIE|Edge/i)) {
      overlay.classList.add('fade');
      popup.classList.add('more-splash');
    } else if (isMobile()) {} else {
      let a = 0;
      popup.style.top = "50px";
      let timer = setInterval(() => {
        if (popup.style.top == '150px') {
          clearInterval(timer);
        } else {
          a += 2;
          popup.style.top = a + 'px';
        }
      }, 20);
    }
    document.body.style.overflow = 'hidden';
  });


  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.querySelector('.main-form').style.display = '';
    if(document.querySelector('.status-message')) {
      document.querySelector('.status-message').innerHTML = '';
    }
    document.body.style.overflow = '';
    if (navigator.userAgent.match(/MSIE|Edge/i)) {
      overlay.classList.remove('fade');
      popup.classList.remove('more-splash');
    }
  });

  let description = document.querySelectorAll('.description-btn');

  description.forEach(item => {
    item.addEventListener('click', () => {
      overlay.style.display = 'block';
      if (navigator.userAgent.match(/MSIE|Edge/i)) {
        overlay.classList.add('fade');
        popup.classList.add('more-splash');
      } else if (isMobile()) {} else {
        let a = 0;
        popup.style.top = "50px";
        let timer = setInterval(function () {
          if (popup.style.top == '150px') {
            clearInterval(timer);
          } else {
            a += 2;
            popup.style.top = a + 'px';
          }
        }, 20);
      }
      document.body.style.overflow = 'hidden';
    });
  });
}

module.exports = modal;