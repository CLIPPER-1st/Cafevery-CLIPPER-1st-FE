export function convertTime(time: string): { convertedTime: number; formattedTime: string } {
    if (!time || typeof time !== 'string' || !time.includes(':')) {
        console.error('Invalid time format');
        return { convertedTime: null, formattedTime: '' };
    }

    const [hour, minute] = time.split(':');

    const hourNumber = parseInt(hour, 10);
    const amPm = hourNumber >= 12 ? 'PM' : 'AM';

    const adjustedHour =
        hourNumber > 12 ? hourNumber - 12 : hourNumber === 0 ? 12 : hourNumber;

    const formattedTime = `${amPm} ${adjustedHour.toString().padStart(2, '0')}:${minute}`;

    if (time === '휴무') {
        return { convertedTime: -1, formattedTime };
    } else {
        const convertedMinutes = parseInt(minute, 10) / 60;
        const convertedTime = hourNumber + convertedMinutes;
        return { convertedTime, formattedTime };
    }
}
