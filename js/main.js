// doesn't have value yet, but will later.
let alarmTime = null; 
let alarmEnd = null; 


//time 12 hour format
function currentTime() {
    let date = new Date();
    let hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(); 
    let meridiem = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours; //updating hours to include 0
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    time = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    let clock = document.getElementById("clock");
    clock.innerHTML = time;
};

// makes the clock tick every second
setInterval(currentTime, 1000);


//retrieve the value from html input
function retrieveTime() {
    alarmTime = document.getElementById('alarm').value;

};

// the alarm message function
function alarmMessage() {
    alert('Alarm!');
};


// set the alarm function 
function setAlarm() {
    //if there's an alarm time do this:
    if(alarmTime) { 
        let currentTime = new Date();
        let alertTime = new Date(alarmTime);
        
    //if alarm time is greater than the time now do this:
    if (alertTime > currentTime) {
        let timeout = alertTime.getTime() - currentTime.getTime(); //variable to get the time difference from alarm to current time
        alarmEnd = setTimeout(alarmMessage, timeout); //fires the alarm
        alert("Alarm Set!")
    
    }
    }

};


