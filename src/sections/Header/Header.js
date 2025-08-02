import BurgerMenu from "./components/BurgerMenu/BurgerMenu.js";
import Logo from "./components/Logo/Logo.js";
import NavMenu from "./components/NavMenu/NavMenu.js";
import "./Header.scss";

export default function Header() {
  return `
    <header class="header">
        ${BurgerMenu()}
        ${Logo()}
        ${NavMenu()}
    </header>
  `;
}
