import { rest } from 'msw';
import {data} from './data.json';

export const userInfoHandler = [
  rest.get(`/users/info`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];