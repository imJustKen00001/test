import Header from "./sections/Header.js";
import "./styles/main.scss";

const app = (document.getElementById("app").innerHTML = `
  ${Header()}
`);
