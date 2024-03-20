import { rest } from 'msw';
import { data } from './data.json';

export const deleteFavoriteLocationHandler = [
  rest.delete('/users/location/:id', (req, res, ctx) => {
    // URL 경로에서 id 추출
    const { id } = req.params;

    // id가 숫자 형식인지 검사
    // URL 파라미터는 기본적으로 문자열로 전달되므로, 숫자로 변환 가능한지 확인
    if (!isNaN(Number(id))) {
      // id가 유효한 경우, 성공 응답
      return res(ctx.status(200), ctx.json(data));
    } else {
      // id가 유효하지 않은 경우, 에러 응답
      return res(ctx.status(400), ctx.json({ message: 'Invalid id format' }));
    }
  }),
];
