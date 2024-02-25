import {http, HttpResponse} from 'msw';
import {data} from './data.json';

export const cafesHandler = [
  http.get(`/cafes/?centerLatitude=37.5606291&centerLongitude=126.9934283`, () => {
    return HttpResponse.json(data);
  }),
];