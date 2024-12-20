const timerEl = document.getElementById('clock');
const marksList = document.getElementById('marks');
let timer = 0;
let interval = 0;
let marks = [];

const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const hundredths = time % 100;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
}

// Temporizador
const toggleTimer = () => {
    const button = document.getElementById("Start");
    const mode = button.getAttribute("action");

    clearInterval(interval);

    if (mode == 'start' || mode == 'continue'){
        interval = setInterval(() => {
            timer += 1;
            setTimer(timer);
        }, 10);
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

//Reset
const resetTimer = () => {
    clearInterval(interval);
    timer = 0;
    setTimer(0);
    const button = document.getElementById("Start");
    button.setAttribute("action", "start");
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
    marks = [];
    marksList.innerHTML = '';
}

document.getElementById("Reset").addEventListener("click", resetTimer);

// Marcações
const addMarkToList = (markIndex, markTime) => {
    marksList.innerHTML += `<div class="mark"><p>${markIndex}: ${formatTime(markTime)}</p><i class="fa-solid fa-thumbtack"></i></div>`;
}

const markTime = () => {
    if (timer > 0){
        marks.push(timer);
        addMarkToList(marks.length, timer);
    }else{
        alert('Inicie o cronômetro para marcar');
    }
}

document.getElementById("frag").addEventListener("click", markTime);