import {http, HttpResponse} from 'msw';
import {data} from './data.json';

export const likeHandler = [
  http.get('/cafes/likes', () => {
    return HttpResponse.json(data);
  }),
];