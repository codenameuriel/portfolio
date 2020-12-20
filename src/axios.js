import axios from 'axios';

const youtubeAxios= axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

const mediumAxios = axios.create({
  baseURL: 'https://v1.nocodeapi.com'
});

const firebaseAxios = axios.create({
  baseURL: 'https://uriels-portfolio.firebaseio.com'
});

export {
  youtubeAxios,
  mediumAxios,
  firebaseAxios
};
