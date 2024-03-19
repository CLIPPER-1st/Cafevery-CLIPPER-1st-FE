import { rest } from 'msw';
import {data} from './data.json';

export const putLikeHandler = [
  rest.put(`/cafes/1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];