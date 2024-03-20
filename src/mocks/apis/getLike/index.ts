import { rest } from 'msw';
import {data} from './data.json';

export const likeHandler = [
  rest.get('/cafes/likes', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];