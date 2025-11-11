const hours = document.querySelector('.hours');
const minites = document.querySelector('.minites');
const seconds = document.querySelector('.seconds');
const AMPM = document.querySelector('.AMPM');
function runClock() {
  let time = new Date();
  let hrs = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let txt = '';

  if(hrs>12){
    hrs=hrs-12;
    txt='PM'
  }
  else if(hrs==0){
    hrs=12;
    txt="AM"
  }

  hrs=hrs<10?'0'+hrs:hrs;
  min=min<10?'0'+min:min;
  sec=sec<10?'0'+sec:sec
  
  hours.innerHTML = hrs;
  minites.innerHTML = min;
  seconds.innerHTML = sec;
  AMPM.innerHTML= txt

  
}

setInterval(runClock,1000);
