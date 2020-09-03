"use strict";


const NumberofFilms = +prompt("Сколько фильмов вы уже просмотрели: ","");

    if (NumberofFilms<10) {
        alert("Просмотрено довольно мало фильмов");
    } else if  (NumberofFilms>=10 && NumberofFilms<30) {
        alert("Вы классический зритель");
    } else if (NumberofFilms>=30) {
        alert("вы киноман");
    } else {
        alert ("ERROR");
    }

const personalMovieDB={
    count  : NumberofFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};


for (let i=0; i<2;  i++) {
    const   a = prompt("Один из последних просмотренных фильмов?",""),
            b = prompt("На сколько оцените его?","");
    
    if (a != null && b != null && a !="" && b !="" && a.lengh < 50) {
        personalMovieDB.movies[a]=b;
        console.log("done");
    } else {
        console.log('error');
        i--;
    }   

}







console.log(personalMovieDB);