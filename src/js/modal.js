function modal() {
  // let more = document.querySelector('.more');
     let overlay = document.querySelector('.overlay'),
     isActiveBtn;
      // close = document.querySelector('.popup-close'),
      // popup = document.querySelector('.popup');


  function isMobile() {
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
      return true;
    }
    return false;
  }

  const bindModal = (overlayStatus, overflowStatus, classListMethod, el) => {
    if (classListMethod == 'add') isActiveBtn = el;
    if (!el) el = isActiveBtn;
    overlay.style.display = overlayStatus;
    document.body.overflow = overflowStatus;
    if (navigator.userAgent.match(/MSIE|Edge|Windows NT/i)) {
      overlay.classList[classListMethod]('fade');
      el.classList[classListMethod]('more-splash');
    } else if (isMobile()) {} else {
      let a = 0;
      el.style.top = "50px";
      let timer = setInterval(() => {
        if (el.style.top == '150px') {
          clearInterval(timer);
        } else {
          a += 2;
          el.style.top = a + 'px';
        }
      }, 20);
    }
  };

  document.body.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('more') || target.classList.contains('description-btn')) bindModal('block', 'hidden', 'add', target);
    if (target.classList.contains('popap-close')) bindModal('none', '', remove);
  });

  // more.addEventListener('click', () => {
  //   overlay.style.display = 'block';
  //   if (navigator.userAgent.match(/MSIE|Edge|Windows NT/i)) {
  //     overlay.classList.add('fade');
  //     popup.classList.add('more-splash');
  //   } else if (isMobile()) {} else {
  //     let a = 0;
  //     popup.style.top = "50px";
  //     let timer = setInterval(() => {
  //       if (popup.style.top == '150px') {
  //         clearInterval(timer);
  //       } else {
  //         a += 2;
  //         popup.style.top = a + 'px';
  //       }
  //     }, 20);
  //   }
  //   document.body.style.overflow = 'hidden';
  // });


  // close.addEventListener('click', () => {
  //   overlay.style.display = 'none';
  //   document.querySelector('.main-form').style.display = '';
  //   if(document.querySelector('.status-message')) {
  //     document.querySelector('.status-message').innerHTML = '';
  //   }
  //   document.body.style.overflow = '';
    
  //   if (navigator.userAgent.match(/MSIE|Edge|Windows NT/i)) {
  //     overlay.classList.remove('fade');
  //     popup.classList.remove('more-splash');
  //   }
  // });

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