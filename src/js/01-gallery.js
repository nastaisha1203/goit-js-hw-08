import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');
function createGalleryMarkup(galleryItems) {
  const markup = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href='${original}'>
  <img class="gallery__image" src='${preview}' alt='${description}' />
</a>`;
  });
  return markup.join('');
}
galleryRef.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
