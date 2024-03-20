import { cafeInfoHandler } from './apis/getCafeInfo';
import { cafesHandler } from './apis/getCafes';
import { getSettingUserInfoHandler } from './apis/getSettingUserInfo';
import {likeHandler} from './apis/getLike';
import { patchNicknameHandler } from './apis/patchNickname';
import { putLikeHandler } from './apis/putLike';
import { userInfoHandler } from './apis/getUserInfo';
import { postFavoriteLocationHandler } from './apis/postFavoriteLocation';
import { deleteFavoriteLocationHandler } from './apis/deleteFavoriteLocation';
import { postLogoutHandler } from './apis/postLogout';

export const handlers = [
    ...cafeInfoHandler, 
    ...cafesHandler, 
    ...likeHandler, 
    ...putLikeHandler,
    ...userInfoHandler,
    ...patchNicknameHandler,
    ...getSettingUserInfoHandler,
    ...postFavoriteLocationHandler,
    ...deleteFavoriteLocationHandler,
    ...postLogoutHandler,
];