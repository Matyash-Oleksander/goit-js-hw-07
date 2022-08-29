import { galleryItems } from "./gallery-items.js";
// Change code below this line

/* 1. Створення и рендер розмітки по массиву данных galleryItems.
 */

const createGalleryItems = document.querySelector(".gallery");
const imageMarkup = createImageCard(galleryItems);

createGalleryItems.insertAdjacentHTML("beforeend", imageMarkup);
createGalleryItems.addEventListener("click", onGalleryItemClick);

function createImageCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt='${description}'
        />
      </a>
    </div>`;
    })
    .join("");
  // console.log(markup);
}

/* 2. Реализація делегування на div.gallery и отримання url 
великого зображения.
 */

function onGalleryItemClick(event) {
  event.preventDefault();
  // console.log(event.target);
  const isOriginalUrl = event.target.classList.contains("gallery__image");
  // console.log(isOriginalUrl);

  if (!isOriginalUrl) {
    return;
  }
  // console.log(event.target.dataset);
  // console.log(event.target.alt);
  // console.log(event.target.dataset.src);

  const swatchUrlEl = event.target.dataset.source;

  // import * as basicLightbox from "basiclightbox";

  // console.log(swatchUrlEl);

  /* 3. Заміна значения атрибута src элемента <img> в модальному вікні перед відкриттям.
   */

  const instance = basicLightbox.create(
    `<img class="modal__image" src="${swatchUrlEl}"/>`
  );
  instance.show();

  /* 4. Закрытие модального она по "ESC"
   */
  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = "Escape";
    if (event.code === ESC_KEY_CODE) {
      instance.close();
      window.removeEventListener("keydown", onEscKeyPress);
    }
  }
}

console.log(galleryItems);
