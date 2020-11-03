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
    minutes.innerHTML = currentMinutes;
    seconds.innerHTML = currentSeconds;

    console.log(currentHours % 12);
    console.log(currentMinutes);
    console.log(currentSeconds);

    amPm.innerHTML = currentHours >= 12 ? 'PM' : 'AM';
}

setInterval(setTime, 1000);

setTime();