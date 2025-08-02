import logo from "/assets/logos/logo.svg";
import "./Logo.scss";

export default function Logo() {
  return `
        <img src="${logo}" class="header__logo" alt="Logo" />
`;
}
