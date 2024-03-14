/**두 지점 간의 거리를 계산하는 함수 (Haversine 공식) */
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    function toRad(x: number) {
        return (x * Math.PI) / 180;
    }

    const R = 6371; // 지구의 반지름(km)
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}
