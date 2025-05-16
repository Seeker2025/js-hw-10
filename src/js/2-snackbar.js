console.log('Snackbar module loaded');

const formRef = document.querySelector('form.form');
// console.log(formRef);

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    // console.log(event.currentTarget.elements.delay.value);
    // console.log(event.currentTarget.elements.state.value);
    const isObj = {};

    const data = new FormData(event.currentTarget);
    data.forEach((value, name)=>{
        isObj[name]=value;
     });
    console.log(isObj);
    const { delay, state } = isObj;
    toQuickPromise({ delay, state });
};

function toQuickPromise({ delay, state }){
    setTimeout(()=>{
    new Promise((resp, rej)=>{
        // let num = Math.random();
        if(state==='fulfilled') resp('Fulfilled');
        else rej('Rejected');
    }).then((resp)=>console.log(resp))
    .catch((rej)=>console.log(rej))    

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