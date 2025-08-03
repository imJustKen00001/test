import "./styles/main.scss";
import Header from "./sections/Header/Header.js";
import Main from "./sections/Main/Main.js";
import Footer from "./sections/Footer/Footer.js";
import { initializeMenuBarSwiper } from "./utils/swipers/menuBarSwiper.js";
import { changeActiveSlide } from "./utils/events.js";
import { initializeBrandSliderSwiper } from "./utils/swipers/brandSliderSwiper.js";
import { initializeDeviceRepairSliderSwiper } from "./utils/swipers/deviceRepairSliderSwiper.js";
import { initializeServicePriceSliderSwiper } from "./utils/swipers/servicePriceSliderSwiper.js";

const app = (document.getElementById("app").innerHTML = `
<div class="container">
  ${Header()}
  ${Main()}
  ${Footer()}
</div>
`);

initializeMenuBarSwiper();
changeActiveSlide();
initializeBrandSliderSwiper();
initializeDeviceRepairSliderSwiper();
initializeServicePriceSliderSwiper();
