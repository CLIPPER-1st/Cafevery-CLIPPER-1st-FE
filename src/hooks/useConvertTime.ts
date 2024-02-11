/**시간을 분으로 변환하는 커스텀 훅 */
export function useConvertTime(time: string) {
    const [hours, minutes] = time.split(':').map(Number);
    if(time === "휴무") {
        return 25;
    }
    else {
    
        const convertedMinutes = minutes / 10; //0.1단위로 환산
        const convertedTime = hours + convertedMinutes
        return convertedTime;
    }
}