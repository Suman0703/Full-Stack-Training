//promise
 async function myfunction(){

}

const myPromise=async()=>{
    const response=fetch("https://fakestoreapi.in/api/products")
    console.log(response);

}
myPromise()

//to add delay
let a="anmol";
console.log(a);

setTimeout(()=>{
    console.log("Delay of 2ms");

},2000)

console.log("console between 2ms and 1ms");

setTimeout(()=>{
    for (let i=1;i<=5;i++){
        console.log(i);

    }
},0)