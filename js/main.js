let today = new Date();
let year = today.getFullYear();
let month = (today.getMonth() + 1); 
let day = today.getDate();
day = (day < 10) ? "0" + day : day;
month = (month < 10) ? "0" + month : month;
let date = month + "-" + day + "-" + year;
document.getElementById('date').innerHTML = date;


function twentyFourHour() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let amOrPm = "AM"

     if (hour > 12) {
        amOrPm = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hour + ':' + minute + ":" + seconds + " " + amOrPm;

    document.getElementById('clock').innerHTML = time;


    if (hourButtonTwelve.disabled = true) {
        hourButtonTwenty.disabled = false;
    }
     setInterval(twentyFourHour, 1000);

};

function twelveHour() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let amOrPm = "AM"

    if (hour === 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        amOrPm = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hour + ':' + minute + ":" + seconds + " " + amOrPm;

    document.getElementById('clock').innerHTML = time;
    




    if (hourButtonTwenty.disabled = true) {
        hourButtonTwelve.disabled = false;
    } 
    setInterval(twelveHour, 1000);
    
 }


let hourButtonTwenty = document.querySelector('.twentyfour');
let hourButtonTwelve = document.querySelector('.twelve')
hourButtonTwenty.addEventListener('click', twentyFourHour);
hourButtonTwelve.addEventListener('click', twelveHour);



    



// have something to set the alarm //
// have a place to store the alarm
// get time from clock 
// hour from alarm needs to check from hour of clock --- 
// minute from alarm needs to check from minute of clock:
// seconds from alarm needs to check from seconds of clock
// alert when the alarm goes off
// hour, minute, second needs to tie into clock/set alarm button







