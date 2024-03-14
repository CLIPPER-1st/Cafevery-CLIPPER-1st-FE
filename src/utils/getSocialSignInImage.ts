import NaverSignInButtonImg from '@/assets/Buttons/NaverSignInButton.png';
import KakaoSignInButtonImg from '@/assets/Buttons/KakaoSignInButton.png';
import GoogleSignInButtonImg from '@/assets/Buttons/GoogleSignInButton.png';

export const getSocialSignInImage = (socialType: string) => {
    switch(socialType) {
        case "naver":
            return NaverSignInButtonImg;
        case "kakao":
            return KakaoSignInButtonImg;
        case "google":
            return GoogleSignInButtonImg;
        default:
            return undefined;
    }
};
