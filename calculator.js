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
let buttonDot = document.getElementById('dot');
let buttonLeftSkoba = document.getElementById('left_skoba');
let buttonRightSkoba = document.getElementById('right_skoba');

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
    inputField.textContent += '0'
};

//1
button1.onclick = function clickingFunc() {
    inputField.textContent += '1'
};

//2
button2.onclick = function clickingFunc() {
    inputField.textContent += '2'
};

//3
button3.onclick = function clickingFunc() {
    inputField.textContent += '3'
};

//4
button4.onclick = function clickingFunc() {
    inputField.textContent += '4'
};

//5
button5.onclick = function clickingFunc() {
    inputField.textContent += '5'
};

//6
button6.onclick = function clickingFunc() {
    inputField.textContent += '6'
};

//7
button7.onclick = function clickingFunc() {
    inputField.textContent += '7'
};

//8
button8.onclick = function clickingFunc() {
    inputField.textContent += '8'
};

//9
button9.onclick = function clickingFunc() {
    inputField.textContent += '9'
};

//Dot
buttonDot.onclick = function clickingFunc() {
    inputField.textContent += '.'
};

//LeftSkoba
buttonLeftSkoba.onclick = function clickingFunc() {
    inputField.textContent += '('
};

//Right Skoba
buttonRightSkoba.onclick = function clickingFunc() {
    inputField.textContent += ')'
};


//Нажатие на кнопку с матем-им действием
// "+"
buttonPlus.onclick = function clickingFunc() {
    inputField.textContent += '+'
};

// "-"
buttonMinus.onclick = function clickingFunc() {
    inputField.textContent += '-'
};

// "*"
buttonMultiply.onclick = function clickingFunc() {
    inputField.textContent += '*'
};

// "/"
buttonDivide.onclick = function clickingFunc() {
    inputField.textContent += '/'
};


//Кнопка очистки поля "Ввод"
buttonClear.onclick = function clickingFunc() {
    inputField.textContent = ''
    answerField.textContent = ``
};


//Кнопка стирания по одному символу в поле "Ввод"
buttonBackspace.onclick = function() {
    inputField.textContent = inputField.textContent.substring(0,inputField.textContent.length -1);
}

//Кнопка вычисления результата
buttonEqual.onclick = function() {
    let inputValue = inputField.textContent;
    let calculate = eval(inputValue);
    answerField.textContent = `${calculate}`;

    if (calculate == undefined){
        answerField.textContent = ``;
    };

    if (calculate == Infinity){
        answerField.textContent = `∞`;
    };

}
