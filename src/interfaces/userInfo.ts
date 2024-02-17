export interface ILocation {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
}

export interface UserInfo {
    profile_image: string;
    nickname: string;
    locations: ILocation[];
}

export interface UserInfoState {
    data: {
        infos: UserInfo;
    };
}