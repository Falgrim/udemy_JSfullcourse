
"use strict";

alert('hello');

const result = confirm("Are you here ");
console.log(result);

const answer = +prompt ("Вам есть 18 лет", "18");
console.log(typeof(answer));

const answers=[];

answers[0]=prompt("Как ваше имя?","");
answers[1]=prompt("Как ваша фамилия?","");
answers[2]=prompt("Как ваше Отчество?","");

document.write(answers)



const category = "toys";
console.log(`https://someurl.com/${category}/5`);

const name="Ivan";
alert(`Привет ${name}`);

const a="5";
console.log(4 + +a);

let incr=10,
    decr=10;

console.log(incr++);
console.log(decr--);

const isChecked = false,
      isClosed = false;

console.log(isChecked || !isClosed);

