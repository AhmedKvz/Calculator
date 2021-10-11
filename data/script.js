const display1el = document.querySelector('.display-1');
const display2el = document.querySelector('.display-2');
const tempResult = document.querySelector('.temp-result');
const buttonEl = document.querySelectorAll('.button');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-input-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

buttonEl.forEach( number => {
    number.addEventListener('click', (e) => {
        if( e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
    }
    dis2Num += e.target.innerText;
    display2el.innerText = dis2Num;
})
});
