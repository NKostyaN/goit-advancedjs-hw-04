const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46590311-6ed07305336452fed03a33c90';
const EXTRA_OPTIONS = 'image_type=photo&orientation=horizontal&safesearch=true';

function getPhotos(query) {
  return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&${EXTRA_OPTIONS}`).then(
    res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    }
  );
}

export default getPhotos;
