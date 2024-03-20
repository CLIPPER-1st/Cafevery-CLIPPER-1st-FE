import { rest } from 'msw';
import { data } from './data.json';

export const deleteSignoutHandler = [
  rest.delete('/auth/signout', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
