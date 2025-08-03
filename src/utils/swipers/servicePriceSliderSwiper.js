import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";

Swiper.use([Pagination]);

export function initializeServicePriceSliderSwiper() {
  const slider = document.querySelector(".service-price__slider-container");
  if (!slider) return;
  return new Swiper(".service-price__slider-container", {
    slidesPerView: 1.1,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".service-price__pagination",
      clickable: true,
      type: "bullets",
    },
  });
}
