"use strict";

const num=50;

(num === 50) ? console.log("тест прошел") : console.log("test was not OK")

switch (num) {
    case 48:
        console.log("слишком мало");
        break;
    case 50:
        console.log("слишком много");
        break;
    case 49:
        console.log("that's the point !")
        break;
    default :
      console.log("not at this time");
        break;
}

// циклы

let i=1;
while ( i <5  ) {
    console.log (i)
    i++;
}
