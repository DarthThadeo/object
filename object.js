// JavaScript source code
"use strict";

let student = {//declare un objet avec name, favoriteFood et city
    name: 'Tivgan',
    favoriteFood: "poulet",
    city:"Paris"
}
let values = Object.values(student);//recuperer le nombre de caracteres
let count = values.reduce((acc, value)=> acc + value.length, 0)
console.log(count)