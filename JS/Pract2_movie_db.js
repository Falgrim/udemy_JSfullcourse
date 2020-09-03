"use strict";


const NumberofFilms = +prompt("Сколько фильмов вы уже просмотрели: ","");

    if (NumberofFilms<10) {
        alert("Просмотрено довольно мало фильмов");
    }
    else if  (NumberofFilms>=10 && NumberofFilms<30) {
        alert("Вы классический зритель");
    }  
    else if (NumberofFilms>=30) {
        alert("вы киноман");
    }
    else {
        alert ("ERROR");
    }




const personalMovieDB={
    count  : NumberofFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};

//let i=0;
for (let i=0; i<2;  i++) {

    let a=prompt("Один из последних просмотренных фильмов?","");
    
    if (a === "") {
        alert("the name of film can't not be emty,  repeat please");
        i--;
        continue;
    }    
    else if ( a.length > 50) {
        alert("the name of the film can't be longer than 50 symbols");
        i--;
        continue;
    }   
    else {
        personalMovieDB.movies[a]=+prompt("На сколько оцените его?","");
    //    i++;  
    }    
} 

console.log(personalMovieDB);