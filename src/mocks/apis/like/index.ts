import {http, HttpResponse} from 'msw';
import {data} from './data';

export const likeHandler = [
  http.get('/test/cafes/likes', () => {
    return HttpResponse.json(data, {status: 200});
  }),
];
