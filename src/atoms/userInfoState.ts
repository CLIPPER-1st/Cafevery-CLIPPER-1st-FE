import { atom } from 'recoil';
import { UserInfoState } from '@/interfaces/userInfo';
import DefaultProfileImg from '@/assets/Images/default.png'

export const userInfoState = atom<UserInfoState>({
    key: 'userInfoState',
    default: { 
        data: { 
            infos: {
                profile_image: `${DefaultProfileImg}`,
                nickname: 'cafevery',
                locations: [ //TODO: mock data. 
                    {
                        id: '1',
                        name: 'Place 1',
                        latitude: 37.5665,
                        longitude: 126.9780,
                    },
                    {
                        id: '2',
                        name: 'Place 2',
                        latitude: 37.5651,
                        longitude: 126.9895,
                    },
                    {
                        id: '3',
                        name: 'Place 1',
                        latitude: 37.5665,
                        longitude: 126.9780,
                    },
                    {
                        id: '4',
                        name: 'Place 2',
                        latitude: 37.5651,
                        longitude: 126.9895,
                    },
                ]
            }
        },
    },
});
