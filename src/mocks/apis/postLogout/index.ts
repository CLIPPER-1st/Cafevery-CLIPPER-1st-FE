import { rest } from 'msw';
import {data} from './data.json';

export const postLogoutHandler = [
  rest.post(`/auth/logout`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];