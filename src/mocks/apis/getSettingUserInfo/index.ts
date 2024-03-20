import { rest } from 'msw';
import {data} from './data.json';

export const getSettingUserInfoHandler = [
  rest.get(`/users`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];