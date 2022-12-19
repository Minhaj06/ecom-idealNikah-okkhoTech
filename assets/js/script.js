$(document).ready(function () {
  $(".mobile-dropdown").click(function () {
    $(".mobile-submenu").toggleClass("hide");
  });

  $(".level-two-mobile-dropdown").click(function () {
    $(".level-two-mobile-submenu").toggleClass("hide");
  });

  // Toggle Mobile Menu
  $(".menu-icon").click(function () {
    $(".mobile-menu").toggleClass("show-menu");
  });
});

// menu - icon;

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

// Password Show Hide
const password = document.getElementById("password");
const cPassword = document.getElementById("c-password");

const passIcon = document.querySelector(".pass-icon");
const cPassIcon = document.querySelector(".c-pass-icon");

function showHidePass(selector, icon) {
  console.log(password.value);

  if (selector.type === "password") {
    selector.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    selector.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

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
