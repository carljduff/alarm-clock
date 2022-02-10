var today = new Date();

let hour = today.getHours();
let minute = today.getMinutes();
let seconds = today.getSeconds();


let time = hour + ':' + minute + ":" + seconds;


document.getElementById('clock').innerHTML = time;
