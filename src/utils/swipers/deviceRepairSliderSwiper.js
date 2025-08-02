import "swiper/swiper-bundle.css";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

Swiper.use([Pagination]);

export function initializeDeviceRepairSliderSwiper() {
  const slider = document.querySelector(".device-repair__container");
  if (!slider) return;

  return new Swiper(".device-repair__container", {
    slidesPerView: 1.3,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".device-repair__pagination",
      clickable: true,
      type: "bullets",
    },
  });
}
