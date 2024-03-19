import { cafeInfoHandler } from './apis/cafeInfo';
import { cafesHandler } from './apis/cafes';
import {likeHandler} from './apis/like';

export const handlers = [...cafeInfoHandler, ...cafesHandler, ...likeHandler];

