function form() {
  let message = {
    loading: 'Загрузка...',
    loadingImg: '/dist/img/ajax-loader.gif',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    successImg: '/dist/img/smartphone.png',
    failure: 'Что-то пошло не так...'
  };

  let mainForm = document.querySelector('.main-form'),
      form = document.querySelector('#form'),
      input = document.getElementsByTagName('input'),
      popapForm = document.querySelector('.popup-form'),
      contactForm = document.querySelector('.contact-form'),
      
      statusMessage = document.createElement('div'),
      statusFormImg = document.createElement('img'),
      statusFormP = document.createElement('p');
      statusMessage.classList.add('status-message');

  statusFormImg.classList.add('sFormImg');
  statusMessage.classList.add('sMessage');

  function sendForm(elem, popap) {
    elem.addEventListener('submit', (event) => {
      event.preventDefault();
      popap.appendChild(statusMessage);
      statusMessage.appendChild(statusFormImg);
      statusMessage.appendChild(statusFormP);
      
      let formData = new FormData(elem);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

          request.onreadystatechange = function () {
            
            elem.style.display = 'none';
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200) {
                
                resolve();
              } else {
                reject();
              }

            }
          }
          let jsonObject = {};
          
          for (let [key, value] of data.entries()) {
            jsonObject[key] = value;
          }
          request.send(JSON.stringify(jsonObject));
        });
      }

      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
        document.querySelector('.popup-form__input').value = '+7(';
      }
      postData(formData)
        .then(() => {
          
          statusFormImg.src = message.loadingImg;
          statusFormP.textContent = message.loading;
        })
        .then(() => {
          statusFormImg.src = message.successImg;
          statusFormP.textContent = message.success;
        })
        .catch(() => statusFormP.textContent = message.failures)
        .then(clearInput);


    });
  }

  sendForm(form, contactForm);
  sendForm(mainForm, popapForm);
}

module.exports = form;