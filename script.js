"use strict";

console.log('test0');
let tensId = document.getElementById('tens');
let secondsId = document.getElementById('seconds');
let minsId = document.getElementById('minutes');
let hoursId = document.getElementById('hours');
let tens = 0;
let seconds = 0;
let mins = 0;
let hours = 0;
let b = false;

function timer_start(){
  let buttStart = document.getElementById('butt-start');
  let buttPause = document.getElementById('butt-pause');
  buttStart.disabled = true;
  buttPause.disabled = false;
  b = true;
  window.timerId = window.setInterval(start, 10);
}

function timer_pause(){
  let buttStart = document.getElementById('butt-start');
  let buttPause = document.getElementById('butt-pause');
  buttPause.disabled = true;
  buttStart.disabled = false;
  b = false;
  clearInterval(window.timerId);
}

function timer_reset(){
  clearInterval(window.timerId);
  tens = 0;
  seconds = 0;
  mins = 0;
  hours = 0;
  let buttStart = document.getElementById('butt-start');
  let buttPause = document.getElementById('butt-pause');
  buttPause.disabled = false;
  buttStart.disabled = false;
  b = false;
  tensId.innerHTML = add_zero(tens);
  secondsId.innerHTML = add_zero(seconds);
  minsId.innerHTML = add_zero(mins);
  hoursId.innerHTML = add_zero(hours);
}

function start(){
  tens++;
  if(tens > 99){
    tens = 0;
    seconds++;
    if(seconds > 59){
      seconds = 0;
      mins++;
      if(mins > 59){
        mins = 0;
        hours++;
      }
    }
  }
  tensId.innerHTML = add_zero(tens);
  secondsId.innerHTML = add_zero(seconds);
  minsId.innerHTML = add_zero(mins);
  hoursId.innerHTML = add_zero(hours);
}

document.onkeyup = function(e){
  if(e.keyCode == 32){
    if(!b){
      b = true;
      timer_start();
    } else {
      b = false;
      timer_pause();
    }
  }
  if(e.keyCode == 82 || e.keyCode == 114){
    timer_reset();
  }
}

function add_zero(num){
  if(num <= 9)
    num = '0' + num;
  return num;
}
