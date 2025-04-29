// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";



console.log('Timer module loaded');
let timer = 5;

////// Unix timestamp
// const time = Date.now();
//     console.log(time);

const intervalTime = setInterval(() => {
    timer-= 1;
    console.log(timer);
    if(timer === 0) {
        clearInterval(intervalTime);
        console.log('Timer stopped');
    }
    }, 1000);

    