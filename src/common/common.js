const makeZero = (time) => {
    return time < 10 ? '0'+time : time;
}

const makeAmPm = (hour) => {
    return hour < 12 ? 'AM' : 'PM';
}

export default {makeAmPm, makeZero};