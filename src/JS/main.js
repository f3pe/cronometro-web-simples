const clock = document.getElementById('clock');
let intervalId = 0;
let timer = 0;

const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor(hours / 6000);
    const seconds = Math.floor(time / 6000) / 100;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const toggleTimer = () => {
    const button = document.getElementById('start');
    const action = document.getAttribute('action');

    clearInterval(intervalId);

    if (action == 'start' || action == 'continue'){
        intervalId = setInteval(() => {
            timer += 1;
            setTimer(timer)
        }, 10);
        button.setAttribute('action', 'pause');
    }
}