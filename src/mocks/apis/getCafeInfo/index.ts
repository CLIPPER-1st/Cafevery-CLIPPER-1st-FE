import { rest } from 'msw';
import {data} from './data.json';

export const cafeInfoHandler = [
  rest.get(`/cafes/1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];