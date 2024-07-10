"use strict";

// var x = 3;
// var y = 5;
// var z = x + y;

// let x = 3;
// let y = 5;
// console.log(y);
// let z = x + y;
// console.log(z);
// y = 3;
// console.log(3);

// const x = 3;
// x = 5;

// x = 5;
// y = 3;
// z = x + y;

// console.log(z);

// let age = 16;
// let name = 'Nazariy';
// let isAuthorized = false;
// let uknown = null;

// console.log('number',age);
// console.log( 'name', name);
// console.log('isAuthorized',isAuthorized);
// console.log(uknown);

// console.log( typeof age);
// console.log( typeof name);
// console.log( typeof isAuthorized);
// console.log( typeof uknown);

// alert('permission denied')

// window.console.log()

// const isUserAccepted = confirm("please accept cookies");

// console.log("isUserAccepted", isUserAccepted);

// let a =10;
// a = 'hello';

// console.log(a);
// const userData = prompt('write ur data');
// console.log('user wrote', userData);

// if(isUserAccepted) {
//     console.log('hrttnddd');
// } else{
//     console.log('haaaaaaaaaaa')
// }
// console.log('sbsrrrhrh');

// const message = isUserAccepted ? console.log("KAKGKA") : console.log("else");

// console.log("message");

// console.log('1' + 1);

let age = 16;
console.log('I am ',age, 'years old');

let userName = 'Nazariy';
console.log( 'My name is',userName);

let isStudent = true;
console.log('Nazariy is a student? =>',isStudent);

let myString = 'its not about how hard you hit. its about how hard you can get hit and keep moving forward';
console.log(myString)

let number = 20;
console.log(number + 10);

let myNull = null;
console.log(myNull);

let name = prompt("Введіть ваше ім'я:");
alert('Hello ' + name + ' !');


let userConfirmation = confirm("Ви хочете підтвердити дію?");
if (userConfirmation) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}

alert("Увага! Ця дія може бути небезпечною.");
let danger = confirm("Ви впевнені, що хочете продовжити?")
if(danger){
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}