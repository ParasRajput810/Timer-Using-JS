let timer1 = document.getElementById("modified");

function getevent (e ){
   
let a = setInterval(()=>{
    var newdate1 = new Date();
let submission= document.getElementById("newid");
let a = Math.abs(Date.parse(submission.value) - newdate1.getTime() );
let day = Math.floor(a / (1000 * 60 * 60 * 24) )
let hours =  Math.floor(a / (1000 * 60 *60))
let minutes = Math.floor(a / (1000 *60 ))
let seconds = Math.floor(a /1000);
let remhours = 0;
if(Math.floor(day == 0)){
    remhours = hours;
}
else {
    let get_days = Math.floor(a / (1000 * 60 * 60 * 24));
    let days_to_hours = get_days * 24;
    remhours = hours - days_to_hours; 
}
let remminutes = 0;
if(remhours ==0){
    remminutes = minutes;
}
else{
    let get_hours = hours;
    let hours_to_min = get_hours * 60;
    remminutes = minutes - hours_to_min;
}
let remseconds = 0;
if(remminutes == 0){
    remseconds = seconds;
}else{
    let get_minutes = minutes;
    let min_to_seconds = get_minutes *60;
    remseconds = seconds - min_to_seconds;
}

timer1.innerHTML = `${day} Days  :  ${remhours} Hours :  ${(remminutes)} Minutes: ${remseconds} Seconds Remaining`
if(day ==0 && hours ==0 && minutes ==0 && seconds == 0){
    timer1.innerHTML = `00 Days  :  00 Hours :  00 Minutes: 00 Seconds Remaining`;
    var audio = new Audio('/audio/alarm-clock-short-6402.mp3');
    let desc1 = document.getElementById("desc");
    desc1.innerHTML = "Redirecting...";
    audio.play();
    setTimeout(()=>{
        location.reload();
    },5000);
   
   
}
} , 1000);

e.preventDefault()  
}

let su1 =  document.getElementById("newid");
console.log(su1.value);