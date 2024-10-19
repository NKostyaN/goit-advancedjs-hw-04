import getPhotos from './js/pixabay-api';
import createGalleryItemMarkup from './js/render-functions';
import { showNotFound, showError } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('form');
const btnEl = document.querySelector('button');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

formEl.addEventListener('submit', btnOnSubmit);

let galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function btnOnSubmit(event) {
  event.preventDefault();

  const userQuery = event.target[0].value;
  loaderEl.hidden = false;
  galleryEl.innerHTML = '';

  getPhotos(userQuery)
    .then(data => {
      if (data.hits.length === 0) {
        galleryEl.innerHTML = '';
        loaderEl.hidden = true;
        showNotFound(userQuery);
        return;
      }
      loaderEl.hidden = true;
      galleryEl.innerHTML = createGalleryItemMarkup(data.hits);
      galleryLightbox.refresh();
    })
    .catch(error => showError(error));

  return;
}
