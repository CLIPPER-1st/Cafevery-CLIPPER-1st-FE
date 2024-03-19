import { rest } from 'msw';
import {data} from './data.json';

export const cafesHandler = [
  rest.get(`/cafes/?centerLatitude=37.5606291&centerLongitude=126.9934283`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];