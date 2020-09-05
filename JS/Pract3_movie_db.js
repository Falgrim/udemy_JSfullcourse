"use strict"

let NumberofFilms;


const personalMovieDB={
    count  : NumberofFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};


function start(){
    NumberofFilms = +prompt("Сколько фильмов Вы уже просмотрели?", "");

    while (NumberofFilms == "" || NumberofFilms == null || isNaN(NumberofFilms)) {
        NumberofFilms = +prompt("Сколько фильмов Вы уже просмотрели?", "");
    }
}


function rememberMyFilms() {
    for (let i=0; i<2;  i++) {
        const   a = prompt("Один из последних просмотренных фильмов?",''),
                b = prompt("На сколько оцените его?",'');
        
        if (a != null && b != null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log('error');
            i--;
        }   
    
    }
}


function detectPersonalLevel(){
    if (NumberofFilms<10) {
        alert("Просмотрено довольно мало фильмов");
    } else if  (NumberofFilms>=10 && NumberofFilms<30) {
        alert("Вы классический зритель");
    } else if (NumberofFilms>=30) {
        alert("Вы киноман");
    } else {
        alert ("ERROR");
    }
}

// мое рещение
// function showMyDB(){
//     if ( personalMovieDB.privat == false) {
//         console.log(personalMovieDB)
//     }
// }
// teacher solution
function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}



// my solution
// function writeYourGenres () {
//     for (let i=0; i<3 ; i++){
//         let num = i+1 ;
//         const a=prompt(`Ваш любимый жанр под номером ${num} ?` );
//         personalMovieDB.genres[i] = a;
//     }
// }
// teacher solution
function writeYourGenres () {
    for (let i=1; i<=3 ; i++){
        // pay attention to the line below !  "brektiki" are used with var inside text
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i} ?` );
    }
}



// start();
// detectPersonalLevel();
// rememberMyFilms();
writeYourGenres();
showMyDB(personalMovieDB.privat);

// console.log(personalMovieDB);
























// const str="text";
// console.log(str.length);



// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit="Some fruit";
// console.log(fruit.indexOf("d"));

// const logg="Hello World";
// console.log(logg.slice(6,11));
// // второй аргумент обозначает символ ДО которого мы делаем срез
// // могут быть отрицательные значения

// console.log(logg.substring(6,11));
// // the same as slice , but negative values can not be used

// console.log(logg.substr(6,5));
// //  the main difference from the SUBSTRING command is that second argemnt shows the NUMNER OF SYMBOLS in desaired substring


// const num=12.2;
// console.log(Math.round(num));

// const test ="12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));