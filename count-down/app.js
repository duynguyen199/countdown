const newYears= "1 Jan 2023";
const getEle=(id)=>{
    return document.getElementById(id);
}
const daysEl=getEle('days');
const hoursEl=getEle('hours');
const minsEl=getEle('minutes');
const secondsEl=getEle('seconds');
const formatTime=(time)=>{
    return time<10 ? `${time}`: time;
}
const countdown=()=>{
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
    const totalSeconds =(newYearsDate - currentDate)/1000;
    const days= Math.floor(totalSeconds / 3600 / 24);
    const hours= Math.floor(totalSeconds/3600) %24;
    const minutes= Math.floor (totalSeconds/60) % 60;
    const seconds=Math.floor(totalSeconds)%60;
   daysEl.innerHTML=formatTime(days);
   hoursEl.innerHTML=formatTime(hours);
   minsEl.innerHTML=formatTime(minutes);
   secondsEl.innerHTML=formatTime(seconds);
}
countdown();
setInterval(countdown,1000);