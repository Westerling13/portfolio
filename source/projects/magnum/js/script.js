(function () {
  'use strict';

  var slides = document.querySelectorAll('.slider__item');
  var currentSlide = 0;
  var leftButton = document.querySelector('.slider__button--left');
  var rightButton = document.querySelector('.slider__button--right');
  var slideInterval = setInterval(nextSlide, 5000);

  function goToSlide(n) {
    slides[currentSlide].classList.remove('slider__item--showing');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('slider__item--showing');
  }

  function nextSlide() {
    clearInterval(slideInterval);
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    clearInterval(slideInterval);
    goToSlide(currentSlide - 1);
  }

  rightButton.addEventListener('click', nextSlide);
  leftButton.addEventListener('click', previousSlide);
}());
