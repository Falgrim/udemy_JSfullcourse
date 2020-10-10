'use strict'
window.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('.btn');
    let timerId,
        i = 0;

    function myAnimation() {
        const elem = document.querySelector('.box');
        let pos = 0;

        const id = setInterval(frame, 10);
        function frame() {
            if  (pos == 300) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";

            }
        }
    }   

   btn.addEventListener('click', myAnimation);
    // btn.addEventListener('click', () => {
    //     //const timerId = setTimeout(logger, 2000);
    //     timerId = setInterval(logger, 1000);

    // });

    // const timerId = setTimeout(function(){
    //     console.log('Hello');
    // }, 3000);

    //при создании переменной мы создаем числовой идентификатор чтобы отличать сеттаймаутов
    //const timerId = setTimeout(logger, 2000);

    

    //and this also works
    // setTimeout(logger, 2000);

    // function logger() {
    //     if (i === 3) {
    //         clearInterval(timerId);
    //     }
    //     console.log('text');
    //     i++;
    // }

    // let id = setTimeout(function log(){
    //     console.log('Hello');
    //     id = setTimeout(log, 500);
    // }, 500);





});