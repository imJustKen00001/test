import "./NavMenu.scss";

export default function NavMenu() {
  return `
        <nav class="header__nav-menu">
            <ul class="header__nav-list">
                <li class="header__nav-item header__nav-item--grey-line"><a href="#home" class="header__nav-link button header__nav-link--settings"></a></li>
                <li class="header__nav-item"><a href="#home" class="header__nav-link button header__nav-link--search"></a></li>
            </ul>
        </nav>
    `;
}
