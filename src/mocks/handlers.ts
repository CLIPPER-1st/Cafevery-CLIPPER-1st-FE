import { cafeInfoHandler } from './apis/cafeInfo';
import { cafesHandler } from './apis/cafes';
import {likeHandler} from './apis/like';
import { patchNicknameHandler } from './apis/patchNickname';
import { putLikeHandler } from './apis/putLike';
import { userInfoHandler } from './apis/userInfo';

export const handlers = [
    ...cafeInfoHandler, 
    ...cafesHandler, 
    ...likeHandler, 
    ...putLikeHandler,
    ...userInfoHandler,
    ...patchNicknameHandler,
];

