import "./ServicePriceSlider.scss";

export default function ServicePriceSlider() {
  return `
    <section class="service-price">
      <div class="swiper-container service-price__slider-container">
        <div class="swiper-wrapper service-price__list">
          <div class="swiper-slide service-price__item">
          <div class ="service-price__content">
           <div class="service-price__block">
                <h3 class="service-price__title">Ремонтные услуги</h3>
                <p class="service-price__description">Тестирование с выдачей технического заключения</p>
           </div>
           <div class="service-price__block">
                <h3 class="service-price__title">Цена</h3>
                <p class="service-price__value">Бесплатно</p>
            </div>
            <div class="service-price__block">
                <h3 class="service-price__title">Срок</h3>
                <p class="service-price__value">30-120 мин</p>
            </div>
            <a class="service-price__button" href="#">
                Заказать
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                </svg>
            </a>
           </div>
          </div>
           <div class="swiper-slide service-price__item">
          <div class ="service-price__content">
           <div class="service-price__block">
                <h3 class="service-price__title">Ремонтные услуги</h3>
                <p class="service-price__description">Тестирование с выдачей технического заключения</p>
           </div>
           <div class="service-price__block">
                <h3 class="service-price__title">Цена</h3>
                <p class="service-price__value">Бесплатно</p>
            </div>
            <div class="service-price__block">
                <h3 class="service-price__title">Срок</h3>
                <p class="service-price__value">30-120 мин</p>
            </div>
            <a class="service-price__button" href="#">
                Заказать
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                </svg>
            </a>
           </div>
          </div>
           <div class="swiper-slide service-price__item">
          <div class ="service-price__content">
           <div class="service-price__block">
                <h3 class="service-price__title">Ремонтные услуги</h3>
                <p class="service-price__description">Тестирование с выдачей технического заключения</p>
           </div>
           <div class="service-price__block">
                <h3 class="service-price__title">Цена</h3>
                <p class="service-price__value">Бесплатно</p>
            </div>
            <div class="service-price__block">
                <h3 class="service-price__title">Срок</h3>
                <p class="service-price__value">30-120 мин</p>
            </div>
            <a class="service-price__button" href="#">
                Заказать
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                </svg>
            </a>
           </div>
          </div>
           <div class="swiper-slide service-price__item">
          <div class ="service-price__content">
           <div class="service-price__block">
                <h3 class="service-price__title">Ремонтные услуги</h3>
                <p class="service-price__description">Тестирование с выдачей технического заключения</p>
           </div>
           <div class="service-price__block">
                <h3 class="service-price__title">Цена</h3>
                <p class="service-price__value">Бесплатно</p>
            </div>
            <div class="service-price__block">
                <h3 class="service-price__title">Срок</h3>
                <p class="service-price__value">30-120 мин</p>
            </div>
            <a class="service-price__button" href="#">
                Заказать
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                </svg>
            </a>
           </div>
          </div>
           <div class="swiper-slide service-price__item">
          <div class ="service-price__content">
           <div class="service-price__block">
                <h3 class="service-price__title">Ремонтные услуги</h3>
                <p class="service-price__description">Тестирование с выдачей технического заключения</p>
           </div>
           <div class="service-price__block">
                <h3 class="service-price__title">Цена</h3>
                <p class="service-price__value">Бесплатно</p>
            </div>
            <div class="service-price__block">
                <h3 class="service-price__title">Срок</h3>
                <p class="service-price__value">30-120 мин</p>
            </div>
            <a class="service-price__button" href="#">
                Заказать
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                </svg>
            </a>
           </div>
          </div>
          </div>
        <div class="swiper-pagination service-price__pagination"></div>
      </div>
      <div class="service-price__about">
          <p class="service-price__description">
          Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу.
          Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.
          </p>
          <a href="#" class="service-price__link">
            Получить коммерческое предложение
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 35 35">
            <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
            </svg>
          </a>
      </div>
    </section>
  `;
}
