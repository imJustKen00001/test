import "./ContentBox.scss";

export default function ContentBox() {
  return `
  <section class="content-box">
   <figure class="content-box__container">
     <figcaption class="content-box__caption">
        Мы являемся авторизованным сервисным центром по ремонту техники Dell.
        Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
        <button class="content-box__button"> <img src="/assets/icons/arrow.svg" class="content-box__button-image"></img>Читать далее</button>
      </figcaption>
     <img src="/assets/img/company.png" alt="Content Image" class="content-box__image">
   </figure>
  </section>
  `;
}
