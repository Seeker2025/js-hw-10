// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

console.log('Timer module loaded');
// let timer = 5;

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
const UNIX_Time_now = Date.now();
////input
const input = document.querySelector('input[type="text"]'); 

const daysRef = document.querySelector('.value[data-days]');
const hoursRef = document.querySelector('.value[data-hours]');
const minutesRef = document.querySelector('.value[data-minutes]');
const secondsRef = document.querySelector('.value[data-seconds]');
////button
const startRef = document.querySelector('button[data-start]');
startRef.disabled = true;
input.disabled = false;
// const zerro = 0;
// console.log(daysRef);
// console.log(UNIX_Time_now);
// console.log(startRef);

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      // console.log(selectedDates[0]);
      // console.log(selectedDates[0].getTime());
      userSelectedDate = selectedDates[0];
      const userDate = selectedDates[0].getTime();
      // const startTime = Date.now();
      let difference = userDate - UNIX_Time_now;
      // let difference = 6000; ////// test
      // console.log(userDate>UNIX_Time_now);
      let { days, hours, minutes, seconds } = convertMs(difference);
      // intervalFor(difference);
      // let num02 = 10000;
      //const intervalTime = setInterval(() => {
       
      // let {days, hours, minutes, seconds} = convertMs(num);
      // console.log({ days, hours, minutes, seconds });
       if(userDate < UNIX_Time_now){
                  console.log('No!');
                  startRef.disabled = true;
                  // input.disabled = true;
                  // input.classList.add('gray');
                  window.alert("Please choose a date in the future");
                      iziToast.show({
                        position: 'topRight', // bottomRight, bottomLeft, topRight
                        backgroundColor: 'red',
                        titleColor: 'white',
                        messageColor: 'white',
                                  // theme: 'light', //light
                                  // color: 'green', // blue, red, green, yellow
                        title: 'Date in Past!',
                        message: "Please choose a date in the future"
                              });
                  const{ days, hours, minutes, seconds }=convertMs(0);
                  uiLayout({ days, hours, minutes, seconds });
                  // daysRef.textContent = '00';
                  // hoursRef.textContent = '00';
                  // minutesRef.textContent = '00';
                  // secondsRef.textContent = '00';
             }
        else{
        uiLayout({ days, hours, minutes, seconds });
        startRef.disabled = false;
      }
           
      startRef.addEventListener('click',  ()=>{
        //  console.log(userDate);
        //  console.log(UNIX_Time_now);
         
        // startRef.disabled = true;
        // input.disabled = true;
        // input.classList.add('gray');

        const intervalTime = setInterval(()=>{
          // console.log(difference);
              startRef.disabled = true;
              input.disabled = true;
              input.classList.add('gray');
          difference-= 1000;
              
              if(difference <= 0) {
                clearInterval(intervalTime);
                console.log('Timer stopped');
                input.disabled = false;
                input.classList.remove('gray');
                }
          let {days, hours, minutes, seconds} = convertMs(difference);
          console.log({ days, hours, minutes, seconds });
          // console.log(difference);
          uiLayout({days, hours, minutes, seconds});
        }, 1000)
      
      });
          
              //  let { days, hours, minutes, seconds } = convertMs(difference);
              //   console.log({ days, hours, minutes, seconds });
     
      // console.log(`${days}::${hours}::${minutes}::${seconds}`);
      // console.log(realObj);
      // uiLayout(realObj);
      // intervalFor(difference);
      // days.textContent='22';
    // }, 1000);
        
     },
  };

  const intervalFor=(difference)=>{
  const intervalTime = setInterval(() => {
    
    //  difference-= 1000;
    //      if(difference <= 0) {
    //     clearInterval(intervalTime);
    //     console.log('Timer stopped');
    //     return;
    //     }

        console.log(difference);
       
    // let realObj = null;
    let { days, hours, minutes, seconds } = convertMs(difference);
    // console.log({ days, hours, minutes, seconds });
      // loop(timer)
    // console.log(timer);
    // console.log(`${days}::${hours}::${minutes}::${seconds}`);
    // console.log(`${seconds}`);
    // console.log(difference);
    
    // uiLayout({ days, hours, minutes, seconds });
    
    // if(timer === 0) {
    //     clearInterval(intervalTime);
    //     console.log('Timer stopped');
    // }
    
    // timer-= 1;

    }, 1000);
}

function uiLayout({days, hours, minutes, seconds}){
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minutesRef.textContent = minutes;
    secondsRef.textContent = seconds;
  }

//   function setFun(ooo){
//     userSelectedDate = ooo;
//     setTimeout(()=>{
//   // console.log('userSelectedDate');
//   console.log(userSelectedDate);
// }, 5000)
//   }

//    <button type="button" data-start>Start</button>
  //  const btn = document.querySelector('[data-start]'); 
  //  console.log(input);
  //  console.log(btn);

      function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = padThree(Math.floor(ms / day));
    // Remaining hours
    const hours =  pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes =  pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds =  pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

  //  function getTimeComponents(time) {
  //   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  //   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  //   const secs = pad(Math.floor((time%(1000*60))/1000));
  //   return { hours, mins, secs };
  //   }
  //   function pad(value) {
  //   return String(value).padStart(2, '0');
  //   }

   //console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  //console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  //console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  function pad(value){
    return value.toString().padStart(2, '0');
  }
   function padThree(value){
    return value.toString().padStart(3, '0');
  }

////// Main function
flatpickr(input, options);

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

// const date = new Date();
// console.log(date);
// console.log(date.getTime());

// const date04 = Date.now();
// console.log(date04);

