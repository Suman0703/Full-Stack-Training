console.log(document);
document.getElementById("heading").innerText = "hi javascript";
document.getElementById("heading").style.border = "1px solid blue";
document.getElementById("heading").style.width = "300px";
document.getElementById("heading").style.textAlign = "center";
document.getElementById("H2").style.color = "pink";
document.getElementById("h3").style.color = "green";

//variables
//let, var, const
let simran = 1;
const samriti = 10;
var muskan = 2;
var muskan = 45;
//let and const variables cannot be re-assigned
console.log(simran);
console.log(samriti);
console.log(muskan);

//Function
function myfun() {
    let firstName = "Suman";
    let lastname = "devi";
    console.log(firstName, lastname);
    function nestedfun() {
        let a = 10;
        let b = 40;
        console.log(a + b);
    }
    nestedfun();
}
myfun();

//Execution of JS
myfunction();
let a = 10;
console.log(a);
console.log(b);
var b = 50;
const c = 30;
console.log(c);
function myfunction() {
    console.log("hi from fun");
}
//Function Parameter 
function fun(x, y) {
    console.log(x + y);
}
let r = 30;
let z = 40;
fun(r, z);
//concatenation
function can(x, y) {
    console.log(x + " " + y);
    console.log(x, y);
}
let Q = "Rayat";
let s = "Bahra";
can(Q, s);

//String 
let name = "Rayat Bahra";
let lenght = name.length;
console.log(lenght);

let firstchar = name[1];
let lastchar = name[lenght - 5];
console.log(lastchar);
let splitChar = name.split("");
console.log(splitChar);
console.log(firstchar);