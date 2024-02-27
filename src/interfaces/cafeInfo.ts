export interface BusinessHour {
    days: string;
    start_time: string;
    end_time: string;
}
export interface Cafe {
    id: number;
    latitude: number;
    longitude: number;
    liked: boolean | null;
    start_time: string;
    end_time: string;
    //in_business: boolean;
}

export interface ICafeList {
    cafes: Cafe[];
}

/* 카페 상세조회 데이터 */
export interface CafeInfo {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    business: BusinessHour[];
    //in_business: boolean;
    phone_number: string;
    likes: number;
    liked: boolean;
}