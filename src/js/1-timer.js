// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

console.log('Timer module loaded');
let timer = 5;

////// Unix timestamp
// const time = Date.now();
// console.log(time);

// const intervalTime = setInterval(() => {
//     timer-= 1;
//     console.log(timer);
//     if(timer === 0) {
//         clearInterval(intervalTime);
//         console.log('Timer stopped');
//     }
//     }, 1000);

let userSelectedDate = null;
const input = document.querySelector('input[type="text"]'); 

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      // console.log(selectedDates[0]);
      // console.log(userSelectedDate);
      setFun(selectedDates[0])
     },
  };

  function setFun(ooo){
    userSelectedDate = ooo;
    setTimeout(()=>{
  // console.log('userSelectedDate');
  console.log(userSelectedDate);
}, 5000)
  }

//    <button type="button" data-start>Start</button>
   const btn = document.querySelector('[data-start]'); 
  //  console.log(input);
  //  console.log(btn);

      function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  //console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  //console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  //console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  function addLeadingZero(value){
    return value.toString().padStart(2, '0');
  }
  
let ddd = flatpickr(input, options);

// const date = new Date(userSelectedDate);
// console.log(aa);
// const date02 = new Date();
// console.log(Date.now(date02));

// const t = Date.now();
// const t02 = Date.now();
// console.log(t);
// console.log(t02);
// options.onClose();

// console.log(userSelectedDate);

// setTimeout(()=>{
//   // console.log('userSelectedDate');
//   console.log(userSelectedDate);
// }, 8000)
