//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";


const hr = document.getElementById("hour")
const min = document.getElementById("mins")
const sec = document.getElementById("secs")


function displayTime() {

let date = new Date();

//get hours, mins and secs

let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();

//rotate

let hRotate = 30 * hh + mm / 2;
let mRotate = 6 * mm;
let sRotate = 6 * ss;

hr.style.transform = `rotate(${hRotate}deg)`;
min.style.transform = `rotate(${mRotate}deg)`;
sec.style.transform = `rotate(${sRotate}deg)`;

}
setInterval(displayTime, 1000);
