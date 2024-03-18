import {http, HttpResponse} from 'msw';
import {data} from './data.json';

export const cafeInfoHandler = [
  http.get(`/cafes/1`, () => {
    return HttpResponse.json(data);
  }),
];