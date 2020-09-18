'use strict';

const box = document.getElementById('box');

console.log(box);

//const btns = document.getElementsByTagName('button')[1];
const btns = document.getElementsByTagName('button');


console.log(btns[1]);


const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart');  //этот метод исключение среди других у него в отличие
// от других псевдомассивов есть метод foreach. в круглых скобках мы помещаем css селектор

hearts.forEach(item => {
    console.log(item);
});

//the next method returns FIRST CSS selector which suits the defintion in the brackets
const oneHeart = document.querySelector('.heart');

console.log('oneHeart'); //returns first .heart element at html page

