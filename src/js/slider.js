function slider() {
  let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    dots.forEach((item) => item.classList.remove('dot-active'));
    slides.forEach((item) => {
      item.style.display = 'none'
      item.classList.remove('my-fade');
      item.classList.remove('out-my-fade');
    });

    dots[slideIndex - 1].classList.add('dot-active');
    slides[slideIndex - 1].classList.add('my-fade');
    slides[slideIndex - 1].style.display = '';

  }
  showSlides(slideIndex);


  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });
  next.addEventListener('click', () => {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', (e) => {
    for (let i = 0; i < dots.length + 1; i++) {
      if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;