import { atom } from "recoil";

export const showSplashState = atom<boolean>({
    key: 'searchTermState',
    default: false,
});