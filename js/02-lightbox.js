import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('ul.gallery');

createGallery();

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery() {
  const galleryMarkup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('afterbegin', galleryMarkup);
}
