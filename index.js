// elements
const daysEl = document.querySelector('#days');
const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minutes");
const secondEl = document.querySelector("#seconds");
const millisecondEl = document.querySelector("#milliseconds");
const input = document.querySelector('.inp__settime')
const block = document.querySelector('.timer')
// button --
const StartButton = document.querySelector(".btn-start");
const ButtonStop = document.querySelector(".btn-stop");
const PauseButton = document.querySelector('.btn-pause')
const audio = document.querySelector('.audio')



let hour = 0,
minutes = 0,
seconds = 0,
days = 0,
interval;




PauseButton.addEventListener('click', () => {
    clearInterval(interval)
})


ButtonStop.addEventListener('click', () => {
    clearInterval(interval)
    clear()
})




StartButton.addEventListener('click', function add() {
    clearInterval(interval);
    interval = setInterval(timer, 1000);
    let a = input.value;
    

let dateEnd = new Date(a);
    dateNow = new Date()
    delta = Math.floor((dateEnd - dateNow.getTime()) / 1000);

function timer() {
    let countDown = delta;
  
    days = Math.floor(countDown / 60 / 60 / 24);
  
    countDown -= (days * 60 * 60 * 24);

    if (days <= 9) {
        daysEl.innerHTML = '0' + days;
    } else {
        daysEl.innerHTML = days;
    }
    
    hour = Math.floor(countDown / 60 / 60);


    countDown -= (hour * 60 * 60) ;

    if (hour <= 9) {
        hourEl.innerHTML = '0' + hour;
    } else {
        hourEl.innerHTML = hour;
    }
    
    minutes = Math.floor(countDown / 60);
    countDown -= minutes * 60;
    if (minutes <= 9) {
        minuteEl.innerHTML = '0' + minutes;
    } else {
        minuteEl.innerHTML = minutes;
    }
    
    seconds = Math.floor(countDown);
    if (seconds <= 9) {
        secondEl.innerHTML = '0' + seconds;
    } else {
        secondEl.innerHTML = seconds;
    }

////////////////////////////// Function stopped ///////////////////////
function stop() {
    let d = Date.now()
    
    if (d > dateEnd) {
        clearInterval(interval)
        hour = 0;
        hourEl.innerHTML = '0' + hour;
        minutes = 0;
        minuteEl.innerHTML = '0' + minutes;
        seconds = 0;
        secondEl.innerHTML = '0' + seconds
        audio.play();

    }
}

stop()

///////////////////////////// ****************** /////////////////////
    delta--;
}


})


function clear() {
    days = 0;
    daysEl.innerHTML = '0' + days;
    hour = 0;
    hourEl.innerHTML = '0' + hour;
    minutes = 0;
    minuteEl.innerHTML = '0' + minutes;
    seconds = 0;
    secondEl.innerHTML = '0' + seconds
}