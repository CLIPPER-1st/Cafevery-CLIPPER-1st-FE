import { atom } from 'recoil';
import { UserInfoState } from '@/interfaces/userInfo';
import DefaultProfileImg from '@/assets/Images/default.png'

export const userInfoState = atom<UserInfoState>({
    key: 'userInfoState',
    default: { 
            infos: {
                profile_image: `${DefaultProfileImg}`,
                nickname: 'cafevery',
                locations: [
                    {
                        id: 1,
                        name: 'Place 1',
                        latitude: 37.5665,
                        longitude: 126.9780,
                    },
                ]
            }
        },
});