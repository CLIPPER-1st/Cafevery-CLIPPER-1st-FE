export function convertTime(time: string): { convertedTime: number; formattedTime: string } {    
    // "휴무" 값에 대한 처리를 가장 먼저 수행
    if (time === ('휴무' || '')) {
        return { convertedTime: -1, formattedTime: "휴무" };
    }

    const [hour, minute] = time.split(':');
    const hourNumber = parseInt(hour, 10);
    const amPm = hourNumber >= 12 ? 'PM' : 'AM';
    const adjustedHour = hourNumber > 12 ? hourNumber - 12 : hourNumber === 0 ? 12 : hourNumber;
    const formattedTime = `${amPm} ${adjustedHour.toString().padStart(2, '0')}:${minute}`;

    const convertedMinutes = parseInt(minute, 10) / 60;
    const convertedTime = hourNumber + convertedMinutes;

    return { convertedTime, formattedTime };
}
