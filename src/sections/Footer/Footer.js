import "./Footer.scss";
import Contacts from "./components/Contacts/Contacts.js";

export default function Footer() {
  return `
    <footer class="footer">
        ${Contacts()}
    </footer>
  `;
}
