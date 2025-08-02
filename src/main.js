import "./styles/main.scss";
import Header from "./sections/Header/Header.js";
import Main from "./sections/Main/Main.js";
import { initializeMenuBarSwiper } from "./utils/swipers/menuBarSwiper.js";
import { changeActiveSlide } from "./utils/events.js";
import { initializeBrandSliderSwiper } from "./utils/swipers/brandSliderSwiper.js";
import { initializeDeviceRepairSliderSwiper } from "./utils/swipers/deviceRepairSliderSwiper.js";

const app = (document.getElementById("app").innerHTML = `
  ${Header()}
  ${Main()}
`);

initializeMenuBarSwiper();
changeActiveSlide();
initializeBrandSliderSwiper();
initializeDeviceRepairSliderSwiper();
