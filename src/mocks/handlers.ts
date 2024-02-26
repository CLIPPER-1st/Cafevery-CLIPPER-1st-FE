import { cafesHandler } from './apis/cafes';
import {likeHandler} from './apis/like';

export const handlers = [...likeHandler, ...cafesHandler];

