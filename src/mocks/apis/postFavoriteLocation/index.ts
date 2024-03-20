import { rest } from 'msw';
import { data } from './data.json';

export const postFavoriteLocationHandler = [
  rest.post('/users/location', async (req, res, ctx) => {
    // 비동기적으로 요청 바디 파싱
    const requestBody = await req.json();
    const { name, latitude, longitude } = requestBody;

    // 검증 로직
    if (
      typeof name === 'string' &&
      typeof latitude === 'number' &&
      typeof longitude === 'number'
    ) {
      // 요청 바디가 유효한 경우, 성공 응답
      return res(ctx.status(200), ctx.json(data));
    } else {
      // 요청 바디가 유효하지 않은 경우, 에러 응답
      return res(
        ctx.status(400),
        ctx.json({ message: 'Invalid request body format.' })
      );
    }
  }),
];