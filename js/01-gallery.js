import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('ul.gallery');
let lightbox;

gallery.addEventListener('click', selectImageHandler);

createGallery();

function createGallery() {
  const galleryMarkup = galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('afterbegin', galleryMarkup);
}

function createLightbox(imageUrl) {
  return basicLightbox.create(
    `<img width="1400" height="900" src="${imageUrl}">`,
    {
      onShow: () => {
        document.addEventListener('keydown', closePreviewHandler);
      },
      onClose: () => {
        document.removeEventListener('keydown', closePreviewHandler);
      },
    }
  );
}

function selectImageHandler(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  const selectedImageUrl = event.target.dataset.source;
  lightbox = createLightbox(selectedImageUrl);
  lightbox.show();
}

function closePreviewHandler(event) {
  if (event.code === 'Escape') {
    lightbox.close();
  }
}
