// touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel
'use strict';
window.addEventListener('DOMContentLoaded', () => {

    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
        
    });

   
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

       // console.log('Move');
        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });


});

//touches  - список всех пальцев ,  которые взаимодействуют с экраном
//targetTouches   -  список всех пальцев, которые взаимодействуют с целевым элементом
//changedTouches -  список пальцев, которые участвуют в текущем событии