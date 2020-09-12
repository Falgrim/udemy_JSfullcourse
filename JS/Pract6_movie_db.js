// Передача значений по значению и по ссылке
"use strict";

// В струкутарх данных  в отличие от примитивных данных копирование передается по ссылке , а не по значение

function copy(mainObj) {
    let objCopy = {};

    let key;
    for ( key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

// const newNumbers = copy(numbers);

// newNumbers.a = 10
// newNumbers.c.x = 10

// console.log(newNumbers);
// console.log(numbers);

// Глубокие и поврехностное копирование объектов
// we will work with  повреностоными копиями объектов for a while

const add = {
    d: 17,
    e: 20,
}

// console.log(Object.assign(numbers, add));

const clone = (Object.assign({},add));

clone.a = 77;

// console.log(clone);
// console.log(add);

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();

newArray[1] = 'dfhwejorfh'
console.log(newArray);
console.log(oldArray);

// fourth way of creating of simple copy of data strcutures  ( ES6).  SPREAD operator  ...  ( three dots ) 

const   video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['wordpress','livejournal','blogger'],
        internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);


//there is the same operation for the objects in EWS8

const array = ['a','b']

const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};