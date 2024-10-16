import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const slider = document.querySelector(".swiper");
const acardeon = document.querySelectorAll("[data-name ='acardeon-title']");

let swiper = new Swiper(slider, {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
  },
  autoplay: {
    delay: 2000,
  },
  effect: "fade",
});

acardeon.forEach(function (item) {
  item.addEventListener("click", showContent);
});
function showContent() {
  this.nextElementSibling.classList.toggle("hidden");
  this.classList.toggle("active");
}
