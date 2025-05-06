console.log('Snackbar module loaded');

let a = null;
const obj01 = {
    name: 'Nata03',
    funObj(){
        // console.log(this.name);
        a = this.name;
        
    }
};

obj01.funObj();
console.log(a);