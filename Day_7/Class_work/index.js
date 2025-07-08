//Conditions
//If 
let a=40;
let b=40;
if(a<b){
    console.log("a is less than b");
}else if(a==b){
    console.log("a is equal to b");
}
else{
    console.log("a is leass than b");
}

//Loops
//for loop
let str="Suman Devi"
let n=str.length;
for(let i=0;i<n;i=i+1){
    console.log(str[i])
}

//Reverse for loop
let st="Raman"
let x=st.length;
for(let i=x-1;i>=0;i--){
 console.log(st[i]);
}
//while loop
let i=1;
while(i<10){
    console.log(i);
    i++;
}

//forOf loop
let arr=[1,2,3,4,5,6,7,8];
for(let num of arr){
    console.log(num);
}

//forin loop
let obj={
    name:"Varsha",
    batch:"FS",
    age:18,
    sem:4,
    state:"Punjab",
    subjects :{
        1: ["Chemistry","Physics","Maths"],
        2:["ED","Math","DSA"],
        Specialization:{
            1:"PPS",
            2:"FS",
            3:["SE","Flat"]
        }
        
},
college:"RB",
myfunction:function(){
     console.log(this.name,this.state);
}
}
for(let key in obj){
 //console.log(obj[key]);
 if(typeof(obj[key])=="string"){
    console.log(obj[key]);
 }
}

//odd and even number 
let ar=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<ar.length;i++){
    if(ar[i]%2==0){
        console.log("Element is even:",ar[i]);
    }else{
        console.log("Element is odd:",ar[i]);
        
    }
}
//with backtickets
let y = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < y.length; i++) {
    if (y[i] % 2 === 0) {
        console.log(`Element ${y[i]} is even`);
    }
}
