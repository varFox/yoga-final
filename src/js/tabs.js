const tabs = (iht, ih, it) => {
  let tab = document.querySelectorAll('.' + iht), // '.info-header-tab'
      info = document.querySelector('.' + ih), // '.info-header'
      tabContent = document.querySelectorAll('.' + it); // '.info-tabcontent'

      const hideTabContent = (a) => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  const showTabContent = (b) => {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }
  info.addEventListener('click', (event) => {
    
    let target = event.target;
    if (target && target.classList.contains(iht)) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;