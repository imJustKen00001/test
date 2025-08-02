import "./GTitle.scss";

export default function GTitle(className, text) {
  return `
  <div class="${className} title">
    <h2 class="${className}-text title__text">${text}</h2>
    </div>
  `;
}
