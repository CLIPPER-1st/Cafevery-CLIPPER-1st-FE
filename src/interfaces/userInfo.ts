export interface ILocation {
    id: number;
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
    infos: UserInfo;
}