import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const itemsGalleryEl = createItemsGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', itemsGalleryEl);
galleryEl.addEventListener('click', onImgClick);

// rendered items
function createItemsGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

const instance = basicLightbox.create(
  `
<img width="1280" height="auto" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

function onImgClick(e) {
  e.preventDefault();
  const targetDatasetSource = e.target.dataset.source;
  if (!targetDatasetSource) return;
  instance.element().querySelector('img').src = targetDatasetSource;
  instance.show();
}

function onEscKeyPress(e) {
  if (e.code !== 'Escape') return;
  instance.close();
}