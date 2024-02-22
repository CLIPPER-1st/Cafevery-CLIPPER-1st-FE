import {http, HttpResponse} from 'msw';
import {data} from './data.json';

const centerLatitude = 37.5606291;
const centerLongitude = 126.9934283;

export const cafesHandler = [
  http.get(`/cafes/?centerLatitude=${centerLatitude}&centerLongitude=${centerLongitude}`, () => {
    return HttpResponse.json(data);
  }),
];