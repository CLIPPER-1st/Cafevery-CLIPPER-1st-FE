import {http, HttpResponse} from 'msw';
import {data} from './data.json';

export const cafeInfoHandler = [
  http.get(`/cafes/?cafeId=1`, () => {
    return HttpResponse.json(data);
  }),
];