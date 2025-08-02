export function changeActiveSlide() {
  if (window.innerWidth >= 1440) {
    let slides = document.querySelectorAll(".swiper-slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].addEventListener("click", function () {
        for (let j = 0; j < slides.length; j++) {
          slides[j].classList.remove("swiper-slide-active");
        }
        slides[i].classList.add("swiper-slide-active");
      });
    }
  }
  return null;
}
