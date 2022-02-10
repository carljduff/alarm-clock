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
};


let hourButtonTwenty = document.querySelector('.twentyfour');
let hourButtonTwelve = document.querySelector('.twelve')

hourButtonTwenty.addEventListener('click', twentyFourHour);
hourButtonTwelve.addEventListener('click', twelveHour);




// -------------------DATE-----------------------
/*let today = new Date();
let year = today.getFullYear();
let month = (today.getMonth() + 1); 
let day = today.getDate();
let date = month + "-" + day + "-" + year;*/
//-------------------------------------------------------


// --------------No "0" before Month/Day----------------------- 
/*if (month < 10 || day < 10) {
    document.getElementById('date').innerHTML = "0" + month + "-" + "0" + day + "-" + year;
} else {
    document.getElementById('date').innerHTML = date;
};*/
// -----------------------------------------------------------------




