import "./DeviceRepairSlider.scss";

export default function DeviceRepairSlider() {
  return `
    <section class="device-repair">
      <div class="swiper-container device-repair__container">
        <div class="swiper-wrapper device-repair__menu-list">
          <div class="swiper-slide device-repair__menu-item">
            <h3 class="device-repair__title">Ремонт ПК </h3>
            <a class="device-repair__menu-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                </svg>
            </a>
          </div>
          
          <div class="swiper-slide device-repair__menu-item">
            <h3 class="device-repair__title">Ремонт ноутбуков </h3>
            <a class="device-repair__menu-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                </svg>
            </a>
          </div>
          <div class="swiper-slide device-repair__menu-item">
            <h3 class="device-repair__title">Ремонт планшетов </h3>
            <a class="device-repair__menu-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                </svg>
            </a>
          </div>
          <div class="swiper-slide device-repair__menu-item">
            <h3 class="device-repair__title">Ремонт мониторов</h3>
            <a class="device-repair__menu-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                </svg>
            </a>
          </div>
                    <div class="swiper-slide device-repair__menu-item">
            <h3 class="device-repair__title">Ремонт ПК </h3>
            <a class="device-repair__menu-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                </svg>
            </a>
          </div>
          
          <div class="swiper-slide device-repair__menu-item">
            <h3 class="device-repair__title">Ремонт ноутбуков </h3>
            <a class="device-repair__menu-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                </svg>
            </a>
          </div>
          <div class="swiper-slide device-repair__menu-item">
            <h3 class="device-repair__title">Ремонт планшетов </h3>
            <a class="device-repair__menu-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
                </svg>
            </a>
          </div>
          <div class="swiper-slide device-repair__menu-item">
            <h3 class="device-repair__title">Ремонт мониторов</h3>
            <a class="device-repair__menu-link" href="#">
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
