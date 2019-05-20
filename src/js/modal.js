const modal = () => {
  let overlay = document.querySelector('.overlay');
  popup = document.querySelector('.popup');


  const isMobile = () => {
    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
      return true;
    }
    return false;
  }

  const bindModal = (overlayStatus, overflowStatus, classListMethod) => {
    if (classListMethod == 'remove') {
      document.querySelector('.main-form').style.display = '';
      if (document.querySelector('.status-message')) {
        document.querySelector('.status-message').innerHTML = '';
      }
    }
    overlay.style.display = overlayStatus;

    document.body.overflow = overflowStatus;
    if (navigator.userAgent.match(/MSIE|Edge/i)) {
      popup.classList[classListMethod]('fade');
    } else if (isMobile()) {} else {
      popup.classList[classListMethod]('more-splash');
      popup.classList[classListMethod]('fade');
    }
  };

  document.body.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('more') || target.classList.contains('description-btn')) bindModal('block', 'hidden', 'add');
    if (target.classList.contains('popup-close')) bindModal('', '', 'remove');
  });
}

module.exports = modal;