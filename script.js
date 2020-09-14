const HourD=document.querySelector("#hours");
const MinuteD=document.querySelector("#minutes");
const SecondsD=document.querySelector("#seconds");
const DayNameD=document.querySelector('#day__name');
const DayD=document.querySelector("#day");
const MonthD=document.querySelector('#month');
const YearD =document.querySelector("#year");
const TimingD=document.querySelector("#timing");

const Format={
    isFormat:true
}

const DayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const MonthNames=["Jan","Feb","March","April","May","June","July","August","Sep","Oct","Nov","Dec"]

setInterval(()=>{
    
     const { fullHours, fullMinutes, fullSeconds, DayName, MonthName, fullDate, Year ,Timing} = getDate();
  
     renderUI(fullHours, fullMinutes, fullSeconds, DayName, MonthName, fullDate, Year , Timing);

},250);


function getDate() {

    const Day = new Date();
    const Timing = Day.toLocaleTimeString([],{hour12:'true'}).split(' ')[1];
    // console.log(Timing);
    const fullDate=Day.getDate();
    // console.log(fullDate);
    const DayName = Day.getDay();
    const MonthName = Day.getMonth();
    const Year = Day.getFullYear();
    const temp=Format.isFormat ? -12 : null;
    const Hours = Day.getHours() +temp + "";
    const fullHours = Hours.length < 2 ? "0" + Hours : Hours;
    const Minute = Day.getMinutes() + "";
    const fullMinutes = Minute.length < 2 ? "0" + Minute : Minute;
    const Seconds = Day.getSeconds() + "";
    const fullSeconds = Seconds.length < 2 ? "0" + Seconds : Seconds;
    return { fullHours, fullMinutes, fullSeconds, DayName, MonthName, fullDate, Year, Timing };
}

function renderUI(fullHours, fullMinutes, fullSeconds, DayName, MonthName, fullDate, Year,Timing) {

    HourD.innerHTML = fullHours;
    MinuteD.innerHTML = fullMinutes;
    SecondsD.innerHTML = fullSeconds;
    DayNameD.innerHTML = DayNames[DayName];
    MonthD.innerHTML = MonthNames[MonthName];
    DayD.innerHTML = fullDate;
    YearD.innerHTML = Year;
    TimingD.innerHTML=Timing.toUpperCase();


}

document.querySelector('button').addEventListener('click',()=>{Format.isFormat=!Format.isFormat});
