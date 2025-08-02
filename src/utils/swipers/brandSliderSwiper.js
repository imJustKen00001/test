import "swiper/swiper-bundle.css";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

Swiper.use([Pagination]);

export function initializeBrandSliderSwiper() {
  const slider = document.querySelector(".brand-slider__container");
  if (!slider) return;

  return new Swiper(".brand-slider__container", {
    slidesPerView: 1.3,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".brand-slider__pagination",
      clickable: true,
      type: "bullets",
    },
  });
}
