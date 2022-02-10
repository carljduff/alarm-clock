// -------------------TIME-----------------------------
/*let today = new Date();
let hour = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();
let time = hour + ':' + minute + ":" + seconds; */
// -----------------------------------------------------

//------------------------- No "0" before time ------------------------
/*if (hour < 10 || minute < 10 || seconds < 10) {
    document.getElementById('clock').innerHTML = "0" + hour + ":" + "0" + minute + ":" + "0" + seconds;
} else {
    document.getElementById('clock').innerHTML = time;
};*/
// ------------------------------------------------------------------------




function twentyFourHour() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let time = hour + ':' + minute + ":" + seconds;

    if (hour < 10) {
        document.getElementById('clock').innerHTML = "0" + hour + ":" + minute + ":" + seconds;
    } else if (minute < 10) {
        document.getElementById('clock').innerHTML = hour + ":" + "0" + minute + ":" + seconds;
    } else if (seconds < 10) {
        document.getElementById('clock').innerHTML = hour + ":" + minute + ":" + "0" + seconds;
    } else {
        document.getElementById('clock').innerHTML = time;
    }
    setInterval(twentyFourHour, 1000);
};

function twelveHour() {
    let today = new Date();
    let hour = (today.getHours()) % 12;
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let time = hour + ':' + minute + ":" + seconds;
    if (hour < 10) {
        document.getElementById('clock').innerHTML = "0" + hour + ":" + minute + ":" + seconds;
    } else if (minute < 10) {
        document.getElementById('clock').innerHTML = hour + ":" + "0" + minute + ":" + seconds;
    } else if (seconds < 10) {
        document.getElementById('clock').innerHTML = hour + ":" + minute + ":" + "0" + seconds;
    } else {
        document.getElementById('clock').innerHTML = time;
    }
    setInterval(twelveHour, 1000);
 }


let hourButtonTwenty = document.querySelector('.twentyfour');
let hourButtonTwelve = document.querySelector('.twelve')

hourButtonTwenty.addEventListener('click', twentyFourHour);
hourButtonTwelve.addEventListener('click', twelveHour);

let today = new Date();
let year = today.getFullYear();
let month = (today.getMonth() + 1); 
let day = today.getDate();
let date = month + "-" + day + "-" + year;

if (month < 10) {
   document.getElementById('date').innerHTML = "0" + month + "-" + day + "-" + year;
} if (day < 10) {
   document.getElementById('date').innerHTML = month + "-" + "0" + day + "-" + year;
} else {
    document.getElementById('date').innerHTML = date;
}
    


let setAlarm = document.querySelector('.set');

setAlarm.addEventListener('click', function() {
    let today = new Date();
    let hourSelect = document.getElementById('alarmhour').value;
    let minuteSelect = document.getElementById('alarmminute').value;
    let secondSelect = document.getElementById('alarmseconds').value;

    if ((hourSelect == today.getHours) && (minuteSelect == today.getMinutes) && (secondSelect == today.getSeconds)) {
            alert('Alarm!');
    }

});






/*let alarm = document.getElementById('input').value;
let set = document.querySelector('.set');

set.addEventListener('click', function() {
    let alarmSelect = document.getElementById("input").select();
    if (time.value === alarmSelect) {
        setTimeout();*/

//console.log(document.getElementById("input").select());


// have something to set the alarm //
// have a place to store the alarm
// get time from clock 
// hour from alarm needs to check from hour of clock
// minute from alarm needs to check from minute of clock
// seconds from alarm needs to check from seconds of clock
// alert when the alarm goes off
// hour, minute, second needs to tie into clock/set alarm button







