import axios from 'axios';

export const youtubeAxios= axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

export const mediumAxios = axios.create({
  baseURL: 'https://v1.nocodeapi.com'
});
