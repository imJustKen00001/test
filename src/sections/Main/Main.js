import "./Main.scss";
import MainTitle from "./components/MainTitle/MainTitle.js";
import MenuBar from "./components/MenuBar/MenuBar.js";
import ContentBox from "./components/ContentBox/ContentBox.js";
import GTitle from "../../components/GTitle.js";
import BrandTitle from "./components/titles/BrandTitle/BrandTitle.js";
import BrandSlider from "./components/BrandSlider/BrandSlider.js";
import DeviceRepairTitle from "./components/titles/DeviceRepairTitle/DeviceRepairTitle.js";
import DeviceRepairSlider from "./components/DeviceRepairSlider/DeviceRepairSlider.js";
import ServicePriceSlider from "./components/ServicePriceSlider/ServicePriceSlider.js";

export default function Main() {
  return `
    <main class="main">
      ${MainTitle()}
      ${MenuBar()}
      ${ContentBox()}


      ${GTitle("brand-title", "Ремонт техники различных брендов")}
      ${BrandSlider()}
      ${GTitle("device-repair-title", "Ремонт устройств")}
      ${DeviceRepairSlider()}
      ${GTitle("service-price-title", "Цены на услуги")}
      ${ServicePriceSlider()}

    </main>
  `;
}
