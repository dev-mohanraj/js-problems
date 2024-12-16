let workTime = 25;
let breakTime = 5;
let minutes = workTime;
let seconds = 0;
let timer;
let isWork = true;
const beep = document.querySelector("#beep");
const breakElements = document.querySelectorAll("#break");
const workElements = document.querySelectorAll("#work");

function start() {
  renderTimer();
  if (minutes === 0 && seconds > 0 && seconds < 10) {
    beep.play();
  }
  if (minutes === 0 && seconds === 0) {
    timer && clearTimeout(timer);
    if (isWork) {
      isWork = !isWork;
      minutes = breakTime;
    } else {
      isWork = !isWork;
      minutes = workTime;
    }
    start();
  } else if (seconds !== 0) {
    seconds = seconds - 1;
  } else if (seconds === 0) {
    minutes = minutes - 1;
    seconds = 59;
  }
  timer = setTimeout(() => {
    start();
  }, 1000);
}

function pause() {
  clearTimeout(timer);
}

function play() {
  start();
}

function reset() {
  clearTimeout(timer);
  minutes = workTime;
  seconds = 0;
  renderTimer();
}

function renderTimer() {
  document.getElementById("minute").innerText =
    minutes > 9 ? minutes : "0" + minutes;
  document.getElementById("second").innerText =
    seconds > 9 ? seconds : "0" + seconds;
}

function decreaseWork() {
  if (workTime > 1) {
    workTime = workTime - 1;
    minutes = workTime;
    renderControl();
  }
}

function increaseWork() {
  workTime = workTime + 1;
  minutes = workTime;
  renderControl();
}

function decreaseBreak() {
  if (breakTime > 1) {
    breakTime = breakTime - 1;
    renderControl();
  }
}

function increaseBreak() {
  breakTime = breakTime + 1;
  renderControl();
}

function renderControl() {
  breakElements.forEach((breakElement) => {
    breakElement.innerText = breakTime;
  });
  workElements.forEach((workElement) => {
    workElement.innerText = workTime;
  });
  renderTimer();
}

renderControl();
renderTimer();
