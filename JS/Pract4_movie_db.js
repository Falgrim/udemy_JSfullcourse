"use strcit";

// Callback functions
// examples
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log("Я прошел этот урок!");
}

learnJS("JavaScript", done);




//object  -  how to work with them. Methods. 
// examples
const options = {
    name : "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red",
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border,bg} = options.colors;
console.log(border);

//console.log(options["colors"]["border"]);

// console.log(options.name);

// delete options.name;

// console.log(options);    

console.log(Object.keys(options).length);

//let counter = o;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    //counter++;
    //console.log(counter)

    }
}
