import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function createGalleryItemMarkup(cards) {
  return cards
    .map(
      ({
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        largeImageURL,
      }) => `
      <div class="photo-card">
        <a href="${largeImageURL}" class="photo-link">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" class="gallery-image" data-source=${largeImageURL}/>
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b><br>${likes}
          </p>
          <p class="info-item">
            <b>Views</b><br>${views}
          </p>
          <p class="info-item">
            <b>Comments</b><br>${comments}
          </p>
          <p class="info-item">
            <b>Downloads</b><br>${downloads}
          </p>
        </div>
      </div>`
    )
    .join('');
}

const msgOptions = {
  timeout: 5000,
  position: 'topRight',
  transitionIn: 'bounceInDown',
  transitionOut: 'fadeOutUp',
  transitionInMobile: 'bounceInDown',
  transitionOutMobile: 'fadeOutUp',
  messageSize: '16px',
  theme: 'dark',
  messageColor: 'white',
};

function showError(errorCode) {
  iziToast.error({
    ...msgOptions,
    backgroundColor: '#ef4040',
    message: `Error!<br><b>${errorCode}</b><br>Please try again!`,
  });
}

function showNotFound(query) {
  iziToast.error({
    ...msgOptions,
    backgroundColor: '#ef4040',
    message: `Sorry, there are no images matching your <br><b>${query}</b> query.<br>Please try again!`,
  });
}

function showEmptyQuery() {
  iziToast.info({
    ...msgOptions,
    backgroundColor: '#ffa000',
    message: `Sorry, we can't search empty query.<br>Please try again!`,
  });
}

export default createGalleryItemMarkup;
export { showError };
export { showNotFound };
export { showEmptyQuery };
