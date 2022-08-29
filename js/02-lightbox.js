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
      return `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
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
  //   const isOriginalUrl = event.target.classList.contains("gallery__image");
  // console.log(isOriginalUrl);

  if (!event.target.nodeName !== "IMG") {
    return;
  }
}
//  3/ Додано підписи зображень з бібліотеки SimpleLightbox

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 250,
});

console.log(galleryItems);
