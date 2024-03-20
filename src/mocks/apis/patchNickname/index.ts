import { rest } from 'msw';
import { data } from './data.json';

export const patchNicknameHandler = [
  rest.patch('/users/nickname', async (req, res, ctx) => {
    // 요청 바디에서 비동기적으로 nickname 추출
    const { nickname } = await req.json();

    // nickname 검증
    if (typeof nickname === 'string') {
      // nickname이 문자열이면, 요청 성공 응답
      return res(ctx.status(200), ctx.json(data));
    } else {
      // nickname이 문자열이 아니면, 잘못된 요청 응답
      return res(ctx.status(400), ctx.json({ message: 'Invalid nickname format' }));
    }
  }),
];
