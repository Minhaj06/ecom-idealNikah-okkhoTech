// Single Product Page Swiper Slider
var swiper = new Swiper(".mySwiper", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: false,
  spaceBetween: 10,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  thumbs: {
    swiper: swiper,
  },
});

// Range Slider
let rangeSlider = document.querySelector(".range-slider");
let rangeSliderAfter = window.getComputedStyle(rangeSlider, "::after");

let rangeSelector = document.querySelector(".range-selector");
let rangeSelectedValue = document.querySelector(".range-selected-value");

rangeSelectedValue.innerHTML = rangeSlider.value * 100 + "৳";

rangeSlider.oninput = function () {
  rangeSelector.style.left = this.value + "%";

  rangeSelectedValue.innerHTML = this.value * 100 + "৳";

  rangeSlider.style.setProperty("--rangeSliderWidth", this.value + "%");
};
