/**두 지점 간의 거리를 계산하는 커스텀 훅 (Haversine 공식) */
export function useCalculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    function toRad(x: number) {
        return (x * Math.PI) / 180;
    }

    var R = 6371; // 지구의 반지름(km)
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}
