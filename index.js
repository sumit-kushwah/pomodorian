
const minuteElement = document.getElementById('minute');
const secondsElement = document.getElementById('second');
const startButtonElement = document.getElementById('startbtn');
const workModeElement = document.getElementById('mode');

let mySound = new Audio('./overskaering.wav')

timer = 0;

WORKTIME = 1500

BREAKTIME = 300

timerlimit = WORKTIME;

workMode = true;

id = undefined;

function zeroAdd(num) {
    if (num.length == 1) return "0" + num;
    return num;
}
function startTimer() {
    
    if(id) return;
    id = setInterval(() => {
        timer += 1;
        
        if (timer == timerlimit) {
            mySound.play()
            if (workMode) {
                workModeElement.innerText = 'Break Time'
            } else {
                workModeElement.innerText = 'Work Time'
            }
            timer = 0;
            stopTimer();
            if (workMode) {
                timerlimit = BREAKTIME;
            } else {
                timerlimit = WORKTIME;
            }
            workMode = !workMode;            
        }

        let minutes = (Math.floor(timer / 60)).toString();
        let seconds = (timer % 60).toString();

        minuteElement.innerText = zeroAdd(minutes);
        secondsElement.innerText = zeroAdd(seconds);
    }, 1000)
}

function stopTimer() {
    clearInterval(id);
    id = undefined;
}

