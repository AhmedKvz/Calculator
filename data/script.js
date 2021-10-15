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
    display1El.innerText = '';
    tempResult.innerText = '';
    dis2Num = result;
    dis1Num = '';
});


clearEl.addEventListener('click', (e) => {
    display1El.innerText = '0';
    display2El.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResult.innerText = '0';
});

clearLastEl.addEventListener('click', (e) =>{
    display2El.innerText = '';
    dis2Num = '';
    tempResult = '';
})


function changeTheme(theme)
{

    const root = document.querySelector(':root')
    const circleFirst = document.querySelector('.circle-1')
    const circleSecond = document.querySelector('.circle-2')
    const circleThird = document.querySelector('.circle-3')
    
    switch(theme) 
    {
       
        case 1:   root.className = '';
        circleFirst.classList.remove('opacity');
        circleSecond.classList.add('opacity');
        circleThird.classList.add('opacity'); break;
        
        case 2:   root.className = 'theme2';
        circleSecond.classList.remove('opacity');
        circleFirst.classList.add('opacity');
        circleThird.classList.add('opacity'); break;
        
        case 3:   root.className = 'theme3';
        circleThird.classList.remove('opacity');
        circleFirst.classList.add('opacity');
        circleSecond.classList.add('opacity'); break;
        
    }
};

