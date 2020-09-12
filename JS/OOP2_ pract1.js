'use strict';


const personalMovieDB={
    count  : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start: function() {
        NumberofFilms = +prompt("Сколько фильмов Вы уже просмотрели?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже просмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function(){
        if (NumberofFilms<10) {
            alert("Просмотрено довольно мало фильмов");
        } else if  (NumberofFilms>=10 && NumberofFilms<30) {
            alert("Вы классический зритель");
        } else if (NumberofFilms>=30) {
            alert("Вы киноман");
        } else {
            alert ("ERROR");
        }
    }, 
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (this.privat === false) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    },
    writeYourGenres: function() {

        for (let i=1; i<=3 ; i++){
            // pay attention to the line below !  "brektiki" are used with var inside text
            let genre = prompt(`Ваш любимый жанр под номером ${i} ?` );
            if (genre === null || genre ==='') {
               console.log("Вы ввели некорректное значение"); 
               i--;                                      
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
        
};


personalMovieDB.writeYourGenres();
console.log(personalMovieDB);











//My solution of OOP practice 

// 'use strict';

// let NumberofFilms;


// const personalMovieDB={
//     count  : NumberofFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false,
//     start: function() {
//         NumberofFilms = +prompt("Сколько фильмов Вы уже просмотрели?", "");
    
//         while (NumberofFilms == "" || NumberofFilms == null || isNaN(NumberofFilms)) {
//             NumberofFilms = +prompt("Сколько фильмов Вы уже просмотрели?", "");
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i=0; i<2;  i++) {
//             const   a = prompt("Один из последних просмотренных фильмов?",''),
//                     b = prompt("На сколько оцените его?",'');
            
//                 if (a != null && b != null && a !='' && b !='' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log("done");
//                 } else {
//                 console.log('error');
//                 i--;
//             }   
        
//         }
//     },
//     detectPersonalLevel: function(){
//         if (NumberofFilms<10) {
//             alert("Просмотрено довольно мало фильмов");
//         } else if  (NumberofFilms>=10 && NumberofFilms<30) {
//             alert("Вы классический зритель");
//         } else if (NumberofFilms>=30) {
//             alert("Вы киноман");
//         } else {
//             alert ("ERROR");
//         }
//     }, 
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (this.privat === false) {
//             this.privat = true;
//         } else {
//             this.privat = false;
//         }
//     },
//     writeYourGenres: function() {

//         for (let i=1; i<=3 ; i++){
//             // pay attention to the line below !  "brektiki" are used with var inside text
//             personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i} ?` );
//             if (personalMovieDB.genres[i-1] === null || personalMovieDB.genres[i-1] ===' ' || personalMovieDB.genres[i-1] === undefined) {
//                i--;                                      
//             }
//         }
//         this.forEach(); 
//     },
//     forEach: function() {
//         let indx = 1;
//         for (let i of this.genres) {
//            // console.log(i);            
//             console.log(`Любимый жанр ${indx} - это ${this.genres[indx-1]}`);
//             indx++;
//         }
//     }
// };


// personalMovieDB.writeYourGenres();
// console.log(personalMovieDB);






