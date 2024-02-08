import { CafeInfo } from "@/interfaces/cafeInfo";
import { atom } from "recoil";

export const cafeInfoState = atom<CafeInfo>({
    key: 'cafeInfoState',
    default: {
        id: 1,
        name: "모카 카페",
        latitude: 37.5665,
        longitude: 126.9780,
        business: [
            { days: "월", start_time: "09:00", end_time: "18:00" },
            { days: "화", start_time: "08:00", end_time: "18:00" },
            { days: "수", start_time: "09:00", end_time: "18:00" },
            { days: "목", start_time: "09:00", end_time: "18:00" },
            { days: "금", start_time: "09:00", end_time: "18:00" },
            { days: "토", start_time: "10:00", end_time: "17:00" },
            { days: "일", start_time: "휴무", end_time: "" }
        ],
        in_business: true,
        phone_number: "02-123-4567",
        likes: 42,
        liked: true
    }
});
