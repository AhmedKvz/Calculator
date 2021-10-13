const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResult = document.querySelector('.temp-result');
const numberEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-input-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numberEl.forEach( number => {
    number.addEventListener('click', (e) => {
        if( e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
})
});

operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num ) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if( dis1Num && dis2Num && lastOperation){
            mathOperation();
        }else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function clearVar(name = ''){
    dis1Num += dis2Num + '' + name + '';
    display1El.innerText = dis1Num;
    display2El.innerText = '';
    dis2Num = '';
    tempResult.innerText = result;
}

function mathOperation() {
    if(lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(dis2Num);
    }else if ( lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num);
    }else if ( lastOperation === '-'){
        result = parseFloat(result) - parseFloat(dis2Num);
    }else if ( lastOperation === '/'){
        result = parseFloat(result) / parseFloat(dis2Num);
    };
};

equalEl.addEventListener('click', (e) => {
    if( !dis1Num || !dis2Num ) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResult.innerText = '';
    dis2Num = result;
    dis1Num = '';
});

function changeTheme(theme)
{
    const root = document.querySelector(':root')
  
    switch(theme) 
    {
        case 1:   root.className = ''; break;
        case 2:   root.className = 'theme2'; break;
        case 3:   root.className = 'theme3'; break;
    }
};

