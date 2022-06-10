// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', onPreventDefaultClick);

galleryEl.innerHTML = createGalleryItemMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

function onPreventDefaultClick(e) {
    e.preventDefault();
  }

function createGalleryItem({ preview, original, description }) {
  return `<li><a class="gallery__item" href='${original}'>
  <img class="gallery__image" src='${preview}' 
  alt='${description}' /></a></li>`;
}

function createGalleryItemMarkup(galleryItems) {
  return galleryItems.map(createGalleryItem).join('');
}