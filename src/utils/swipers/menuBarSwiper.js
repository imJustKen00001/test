import "swiper/swiper-bundle.css";
import Swiper from "swiper";

export function initializeMenuBarSwiper() {
  const menuBar = document.querySelector(".service-catalog__container");
  if (!menuBar) return;

  return new Swiper(".service-catalog__container", {
    slidesPerView: "1.5",
    spaceBetween: 5,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 3.8,
      },
      1440: {
        slidesPerView: "6",
      },
    },
  });
}
