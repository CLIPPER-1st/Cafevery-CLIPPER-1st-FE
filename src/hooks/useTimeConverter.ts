export default function useTimeConverter(time: string) {
  if (!time || typeof time !== 'string' || !time.includes(':')) {
    console.error('Invalid time format');
    return '';
  }

  const [hour, minute] = time.split(':');

  const hourNumber = parseInt(hour, 10);
  const amPm = hourNumber >= 12 ? 'PM' : 'AM';

  const adjustedHour =
    hourNumber > 12 ? hourNumber - 12 : hourNumber === 0 ? 12 : hourNumber;

  return `${amPm} ${adjustedHour.toString().padStart(2, '0')}:${minute}`;
}
