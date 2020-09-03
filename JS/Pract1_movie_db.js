"use strict";


let NumberofFilms = prompt("Сколько фильмов вы уже просмотрели: ");
let OB1 = {};
let OB2 = {};
let OB3 = {};


const personalMovieDB={
    count  : NumberofFilms,
    movies : OB1,
    actors : OB2,
    genres : OB3,
    privat : false,
};

const answers1=[];
const answers2=[];

let i = 0;
while (i<2) {
    answers1[i]=prompt("Один из последних просмотренных фильмов? \n");
    answers2[i]=prompt("На сколько оцените его?\n");
    i++;
}
    
const movies={
    [answers1[0]] : answers2[0],
    [answers1[1]] : answers2[1],
};

console.log(NumberofFilms+" \n");
console.log(answers1[0]);
console.log(answers1[1]);
console.log(answers2[0]);
console.log(answers2[1]);
console.log(movies);
