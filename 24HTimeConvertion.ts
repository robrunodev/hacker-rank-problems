function timeConversion(s: string): string {
    
    const addZeroToTime = (time: number) => {
        if (time >= 0 && time < 10) {
            return `0${time}`
        }
        return time
    }

    const hourPeriod = s.substring(s.length - 2, s.length)
    const hourFormatted = `${s.substring(0, s.length - 2)} ${hourPeriod}`;
    const timeByDate = new Date(`1/1/2000 ${hourFormatted}`)
    const getHour = addZeroToTime(timeByDate.getHours());
    const getMinute = addZeroToTime(timeByDate.getMinutes());
    const getSeconds = addZeroToTime(timeByDate.getSeconds());
    const timeFormatted = `${getHour}:${getMinute}:${getSeconds}`

    return timeFormatted
}