import "./MenuBar.scss";

export default function MenuBar() {
  return `
 <section class="service-catalog">
      <div class="swiper-container service-catalog__container">
        <div class="swiper-wrapper service-catalog__menu-list">
          <div class="swiper-slide service-catalog__menu-item"><a class="service-catalog__menu-link" href="#">Ремонтируемые бренды</a></div>
          <div class="swiper-slide service-catalog__menu-item"><a class="service-catalog__menu-link" href="#">Дополнительные услуги</a></div>
          <div class="swiper-slide service-catalog__menu-item"><a class="service-catalog__menu-link" href="#">Цены на услуги</a></div>
          <div class="swiper-slide service-catalog__menu-item"><a class="service-catalog__menu-link" href="#">Адреса сервисных центров</a></div>
          <div class="swiper-slide service-catalog__menu-item"><a class="service-catalog__menu-link" href="#">Специальные цены</a></div>
          <div class="swiper-slide service-catalog__menu-item"><a class="service-catalog__menu-link" href="#">Отзывы</a></div>
        </div>
      </div>
</section>


`;
}
