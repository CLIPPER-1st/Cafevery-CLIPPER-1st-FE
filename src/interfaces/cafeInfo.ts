export interface BusinessHour {
    days: string;
    start_time: string;
    end_time: string;
}
export interface Cafe {
    id: string;
    latitude: number;
    longitude: number;
    liked: boolean | null;
    start_time: string;
    end_time: string;
    in_business: boolean;
}

export interface CafeList {
    cafes: Cafe[];
}
