console.log('Snackbar module loaded');

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const formRef = document.querySelector('form.form');
// console.log(formRef);

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    // console.log(event.currentTarget.elements.delay.value);
    // console.log(event.currentTarget.elements.state.value);
    const form = event.target;
    const isObj = {};

    const data = new FormData(event.currentTarget);
    data.forEach((value, name)=>{
        isObj[name]=value;
     });
    console.log(isObj);
     console.log(typeof(isObj.delay));
    const { delay, state } = isObj;
    toQuickPromise({ delay, state });
    form.reset();
};

function toQuickPromise({ delay, state }){
    const num = Number(delay);
    // console.log(typeof(num));
    setTimeout(()=>{
         new Promise((resp, rej)=>{
        // let num = Math.random();
        if(state==='fulfilled') resp('Fulfilled');
        else rej('Rejected');
    }).then((resp)=>{
        console.log(resp)
        iziToast.show({
                        position: 'topRight', // bottomRight, bottomLeft, topRight
                        backgroundColor: 'DarkGreen',
                        titleColor: 'white',
                        messageColor: 'white',
                                  // theme: 'light', //light
                                  // color: 'green', // blue, red, green, yellow
                        title: 'Success!',
                        message: `Fulfilled promise in ${num}ms`

                              });
    })
    .catch((rej)=>{
        iziToast.show({
                        position: 'topRight', // bottomRight, bottomLeft, topRight
                        backgroundColor: 'darkRed',
                        titleColor: 'white',
                        messageColor: 'white',
                                  // theme: 'light', //light
                                  // color: 'green', // blue, red, green, yellow
                        title: 'Fail!',
                        message: `Rejected promise in ${num}ms`


                              });

        console.log(rej);
    }).finally(()=>{

    })
    }, delay);
}
// toQuickPromise('pee');
// console.log('a'==='a');


function toNum(w){
    if(w==='a') console.log('a');
    if(w==='b') console.log('b');
}
// toNum('a');

// console.log('a'==='a');