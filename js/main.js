// -------------------TIME-----------------------------
/*let today = new Date();
let hour = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();
let time = hour + ':' + minute + ":" + seconds; */
// -----------------------------------------------------

function updateTime() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let time = hour + ':' + minute + ":" + seconds;

    if (hour < 10 || minute < 10 || seconds < 10) {
        document.getElementById('clock').innerHTML = "0" + hour + ":" + "0" + minute + ":" + "0" + seconds;
    } else {
        document.getElementById('clock').innerHTML = time;
    }
};
setInterval(updateTime, 1000);

document.getElementById('clock').onload(updateTime());

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


//------------------------- No "0" before time ------------------------
/*if (hour < 10 || minute < 10 || seconds < 10) {
    document.getElementById('clock').innerHTML = "0" + hour + ":" + "0" + minute + ":" + "0" + seconds;
} else {
    document.getElementById('clock').innerHTML = time;
};*/
// ------------------------------------------------------------------------

