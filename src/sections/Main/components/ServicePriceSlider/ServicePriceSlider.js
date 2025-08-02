import "./ServicePriceSlider.scss";

export default function ServicePriceSlider() {
  return `
    <section class="service-price">
      <div class="swiper-container service-price__container">
        <div class="swiper-wrapper service-price__menu-list">
          <div class="swiper-slide service-price__menu-item">
           <div class="service-price__service">
                <h3 class="service-price__service-title">Ремонтные услуги</h3>
                <p class="service-price__service-description">Тестирование с выдачей технического заключения</p>
           </div>
           <div class="service-price__price">
                <h3 class="service-price__price-title">Цена</h3>
                <p class="service-price__price-value">Бесплатно</p>
            </div>
            <div class="service-price__time">
                <h3 class="service-price__time-title">Срок</h3>
                <p class="service-price__time-value">30-120 мин</p>
            </div>
           </div>
            <a class="service-price__menu-button" href="#">
                Заказать
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                </svg>
            </a>
          </div>
        </div>
        <div class="swiper-pagination device-repair__pagination"></div>
      </div>
    </section>
  `;
}
