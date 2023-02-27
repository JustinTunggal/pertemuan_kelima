//VARIABEL

//var adalah deklarasi rekursif (tidak disarankan)
var number1 = 10;
//gunakan let apabila ada kemungkinan value akan berubah, dan const ketika value tetap.
let number2 = 30;
const number3 = 20;

//contoh print di js (untuk mengeluarkan hasil, ketik di terminal node index.js)
console.log(number1);
console.log(number2);
console.log(number3);

//TIPE DATA
let x
console.log(typeof x);

let number = 10
console.log(typeof number);

let text = "hello";
console.log(typeof text);

let y = true;
console.log(typeof y);

let data = null;
console.log(typeof data);

const car = {
    color: "red",
    price: 1000000000,
};

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);

for(let i=0;i < arr.length; i++){
    console.log(arr[1])
}

//OPERATOR KOMPARASI

const text1 = "hello";
const text2 = "hello";

console.log(number2 == number3);
console.log(number2 != number3);
console.log(number2 > number3);
console.log(number2 >= number3);
console.log(number2 < number3);
console.log(number2 <= number3);
console.log(text1 === text2);

const aString = "10";
const aNumber = 10;
console.log(aString === aNumber);

console.log(number2 > 25 && number3 < 25);
console.log(number2 > 25 || number3 < 25);

//CONDITIONAL

let language = "deustch"

if(language === "english") {
    console.log("english");
} else if (language === "bahasa indonesia") {
    console.log("bahasa indonesia");
} else {
    console.log("deustch");
}

function greetings(name){
    console.log("hello" + name);
}

greetings(" justin");