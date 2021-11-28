"use strict";

let inputField = document.getElementById('input')

let button0 = document.getElementById('0');
let button1 = document.getElementById('1');
let button2 = document.getElementById('2');
let button3 = document.getElementById('3');
let button4 = document.getElementById('4');
let button5 = document.getElementById('5');
let button6 = document.getElementById('6');
let button7 = document.getElementById('7');
let button8 = document.getElementById('8');
let button9 = document.getElementById('9');

let buttonPlus = document.getElementById('plus');
let buttonMinus = document.getElementById('minus');
let buttonMultiply = document.getElementById('multiply');
let buttonDivide = document.getElementById('divide');

let buttonClear = document.getElementById('clear');
let buttonBackspace = document.getElementById('backspace');
let buttonEqual = document.getElementById('equal');

let answerField = document.getElementById('answer');


//Нажатие на кнопки с цифрами отобразит соответствующую цифуру в поле "Ввод"
//0
button0.onclick = function clickingFunc() {
        inputField.defaultValue += button0.textContent
};

//1
button1.onclick = function clickingFunc() {
    inputField.defaultValue += button1.textContent
};

//2
button2.onclick = function clickingFunc() {
    inputField.defaultValue += button2.textContent
};

//3
button3.onclick = function clickingFunc() {
    inputField.defaultValue += button3.textContent
};

//4
button4.onclick = function clickingFunc() {
    inputField.defaultValue += button4.textContent
};

//5
button5.onclick = function clickingFunc() {
    inputField.defaultValue += button5.textContent
};

//6
button6.onclick = function clickingFunc() {
    inputField.defaultValue += button6.textContent
};

//7
button7.onclick = function clickingFunc() {
    inputField.defaultValue += button7.textContent
};

//8
button8.onclick = function clickingFunc() {
    inputField.defaultValue += button8.textContent
};

//9
button9.onclick = function clickingFunc() {
    inputField.defaultValue += button9.textContent
};


//Нажатие на кнопку с матем-им действием
// "+"
buttonPlus.onclick = function clickingFunc() {
    inputField.defaultValue += buttonPlus.textContent
};

// "-"
buttonMinus.onclick = function clickingFunc() {
    inputField.defaultValue += buttonMinus.textContent
};

// "*"
buttonMultiply.onclick = function clickingFunc() {
    inputField.defaultValue += buttonMultiply.textContent
};

// "/"
buttonDivide.onclick = function clickingFunc() {
    inputField.defaultValue += buttonDivide.textContent
};


//Кнопка очистки поля "Ввод"
buttonClear.onclick = function clickingFunc() {
    inputField.defaultValue = ''
    answerField.textContent = `Result: `
};


//Кнопка стирания по одному символу в поле "Ввод"
buttonBackspace.onclick = function() {
    inputField.defaultValue = inputField.defaultValue.substring(0,inputField.defaultValue.length -1);
}

//Кнопка вычисления результата
buttonEqual.onclick = function() {
    let inputValue = inputField.value
    let calculate = eval(inputValue);
    answerField.textContent = `Result: ${calculate}`;

    if (calculate == undefined){
        answerField.textContent = `Input field is empty`;
    };

}
