"use strict";


const NumberofFilms = +prompt("Сколько фильмов вы уже просмотрели: ","");



const personalMovieDB={
    count  : NumberofFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};

const a=prompt("Один из последних просмотренных фильмов? \n"),
      b=prompt("На сколько оцените его?\n"),
      c=prompt("Один из последних просмотренных фильмов? \n"),
      d=prompt("На сколько оцените его?\n");
    

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);