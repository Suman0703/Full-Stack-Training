//IIFE Function
(function () {
    console.log("hello");
})();

//Array
let arr = [1, 2, 3, 4, 5, "Suman", true, false, undefined]
console.log(arr[5]);
console.log(arr[arr.length - 1])
//inserting element
arr.push("Devi");
console.log(arr)
//Removing element
arr.pop(arr)
console.log(arr)
//positioning
arr[6] = "Devi";
console.log(arr)
console.log(arr.length);
arr.splice(7, 0, true);
console.log(arr);
arr[8] = "ok";
arr.splice(9, 0, false);
console.log(arr);

//Object & Keys
let obj = {
    name: "Varsha",
    batch: "FS",
   age: 18,
    sem: 4,
    state: "Punjab",
    //nested object
    subjects: {
        1: ["Chemistry", "Physics", "Maths"],
        2: ["ED", "Math", "DSA"],
        Specialization: {
            1: "PPS",
            2: "FS",
            3: ["SE", "Flat"]
        }

    },
    college: "RB",
    myfunction: function () {
        console.log(this.name,"", this.state)
    }
}
//Calling keys values
console.log(obj.subjects.Specialization[3][0]);
console.log(obj.age);
console.log(obj.name);
console.log(obj.sem);
console.log(obj.batch);
console.log(obj.college);
console.log(obj.state);
console.log(obj.subjects[3]);
//this is for window
console.log(this);
//calling fuction
obj.myfunction();
let out=obj.myfunction();
console.log(out);
//changing key value
obj.college = "RBIET";
console.log(obj.college);