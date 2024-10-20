import axios from 'axios';

const API_KEY = '46590311-6ed07305336452fed03a33c90';

axios.defaults.baseURL = 'https://pixabay.com/api/';

async function getPhotos({ page, perPage, query }) {
  const response = await axios.get(`?key=${API_KEY}`, {
    params: {
      q: query,
      page,
      per_page: perPage,
    },
  });
  return response.data;
}

export default getPhotos;
