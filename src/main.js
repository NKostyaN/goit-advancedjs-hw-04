import getPhotos from './js/pixabay-api';
import createGalleryItemMarkup from './js/render-functions';
import { showNotFound, showError, showEmptyQuery } from './js/render-functions';
import LoaderHandler from './js/loader-handler';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('form');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreEl = document.querySelector('.load-more');
const endMessageEl = document.querySelector('.end-collection');

const loaderHandler = new LoaderHandler(
  galleryEl,
  loaderEl,
  loadMoreEl,
  endMessageEl
);

loaderHandler.setHided();

formEl.addEventListener('submit', btnOnSubmit);

let galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let totalPages = 1;
const params = {
  query: '',
  page: 1,
  perPage: 15,
};

async function btnOnSubmit(event) {
  event.preventDefault();
  loaderHandler.setHided();

  params.page = 1;
  params.query = event.target[0].value.trim();

  if (params.query === '') {
    showEmptyQuery();
    return;
  }

  loaderHandler.setLoading();
  galleryEl.innerHTML = '';

  getPhotos(params)
    .then(data => {
      if (data.hits.length === 0) {
        galleryEl.innerHTML = '';
        loaderHandler.setLoaded();
        showNotFound(userQuery);
        return;
      }

      totalPages = Math.ceil(data.totalHits / data.hits.length);

      console.log(totalPages);

      if (params.page < totalPages) {
        loaderHandler.setLoadMore();
        loadMoreEl.addEventListener('click', loadMoreOnClick);
      } else {
        loaderHandler.setFinalShow();
      }

      loaderHandler.setGalleryShow();
      galleryEl.innerHTML = createGalleryItemMarkup(data.hits);
      galleryLightbox.refresh();
    })
    .catch(error => showError(error));
}

async function loadMoreOnClick() {
  params.page += 1;

  loaderHandler.setLoading();

  getPhotos(params)
    .then(data => {
      loaderHandler.setLoaded();

      if (params.page >= totalPages) {
        loaderHandler.setFinalShow();
      } else {
        loaderHandler.setLoadMore();
      }

      galleryEl.insertAdjacentHTML(
        'beforeend',
        createGalleryItemMarkup(data.hits)
      );
      galleryLightbox.refresh();

      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth',
      });
    })
    .catch(error => showError(error));
}
