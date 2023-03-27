import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const itemsGalleryEl = createItemsGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', itemsGalleryEl);
galleryEl.addEventListener('click', onImgClick);

function createItemsGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}
function onImgClick(e) {
  e.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});