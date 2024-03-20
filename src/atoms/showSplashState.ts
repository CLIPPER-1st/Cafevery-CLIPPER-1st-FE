import { atom } from "recoil";

export const showSplashState = atom<boolean>({
    key: 'showSplashState',
    default: false,
});