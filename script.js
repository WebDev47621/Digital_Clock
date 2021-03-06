const hours = document.getElementById('hours');
const colon = document.getElementById('colon');
const minutes = document.getElementById('minutes');
const amPm = document.getElementById('am-pm');
const seconds = document.getElementById('seconds');

const setTime = () => {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();
    colon.style.visibility = 'visible';

    setTimeout(() => { colon.style.visibility = 'hidden' }, 500);

    hours.innerHTML = currentHours % 12;
    minutes.innerHTML = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
    seconds.innerHTML = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;

    amPm.innerHTML = currentHours >= 12 ? 'PM' : 'AM';
}

setInterval(setTime, 1000);

setTime();