const timerEl = document.getElementById('clock');
let timer = 0;
let interval = 0;

const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const toggleTimer = () => {
    const button = document.getElementById("Start");
    const mode = button.getAttribute("action");

    clearInterval(interval);

    if (mode == 'start' || mode == 'continue'){
        interval = setInterval(() => {
            timer += 1;
            setTimer(timer);
        }, 1000);
        button.setAttribute('action', 'pause');
        button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else if (mode == 'pause'){
        button.setAttribute('action', 'continue');
        button.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

const setTimer = (time) => {
    timerEl.innerHTML = formatTime(time);
}

document.getElementById("Start").addEventListener("click", toggleTimer);

const resetTimer = () => {
    clearInterval(interval);
    timer = 0;
    setTimer(0);
    const button = document.getElementById("Start");
    button.setAttribute("action", "start");
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
}

document.getElementById("Reset").addEventListener("click", resetTimer);
