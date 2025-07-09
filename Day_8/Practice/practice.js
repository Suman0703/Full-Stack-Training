//HoF
let arr=[1,2,3,4,5,6,7,8,9];

//Map
 let out =arr.map((ele,index)=>{
 return ele*2

})
console.log(out);

let Out =arr.map((ele,index)=>{
return ele**2
 })
console.log(Out);

//foreach
let forEachOut=arr.forEach((ele,index)=>{
 return ele

});

 console.log(forEachOut)

 //filter
let filterOut=arr.filter((ele,index)=>{
return ele%2==0;
 });
 console.log(filterOut);

let filOut=arr.filter((ele,index)=>{
return index%2==1;
 });
 console.log(filOut);

//reduce
let reduceOut=arr.reduce((acc,current)=>{
 return acc+current
})
console.log(reduceOut);

let redOut=arr.reduce((acc,current)=>{
 return acc+current
},10);

console.log(redOut);

//using them together
let A =arr.map((ele,index)=>{
 return ele**2

}).filter((ele,index)=>{
    return ele%2==0;
}).map((ele,index)=>{
    return ele*0.5
})
console.log(A);

//Practice
let a = [1, 2, 3, 4, 5, 6, "Raman", "Suman", "Muskan", true, false, undefined]

let ot = a.map((ele, index) => {
    return ele
}).filter((ele, index) => {
    return typeof (ele) == "number";
}).reduce((acc, cur) => {
    return acc + cur;
})
console.log(ot);