let alarmTime = null;
let alarmEnd = null;


function currentTime() {
    let date = new Date();
    let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let meridiem = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    time = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    let display = document.getElementById("clock");
    clock.innerHTML = time;
};

setInterval(currentTime, 1000);



function retrieveTime() {
    alarmTime = document.getElementById('alarm').value;

};

function alarmMessage() {
    alert('Alarm!');
};

function setAlarm() {
    if(alarmTime) {
        let currentTime = new Date();
        let alertTime = new Date(alarmTime);

    if (alertTime > currentTime) {
        let timeout = alertTime.getTime() - currentTime.getTime();
        alarmEnd = setTimeout(alarmMessage, timeout);
        alert("Alarm Set!")
    
    }
    }

};


