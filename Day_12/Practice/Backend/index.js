const  fs = require("fs");

//Write File
// Sync 
// fs.writeFileSync('./test.txt','Hello I am Suman');

//Async
// fs.writeFile('./test.txt','Hello World', (err)=>{
// });

//read File
//sync
// const result = fs.readFileSync("./test.txt","UTF-8");
// console.log(result);

//Async
// fs.readFile("./test.txt","UTF-8",(err,result)=>{
//     if(err){
//         console.log("Error",err); 
//     } else{
//         console.log(result);
//     }
// });

//Append file
//sync
// fs.appendFileSync("./test.txt", "Hey There\n");
//fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

//copy file
// fs.copyFileSync("./test.txt","./copy.txt");

//delete
// fs.unlinkSync("./copy.txt");

//statics about a file
//  console.log(fs.statSync("./test.txt"));

//is file or not
// console.log(fs.statSync("./test.txt").isFile()); 

//making folder

// fs.mkdirSync("my-docs");
//fs.mkdirSync("my-docs/a");


//check if file exist
// if (fs.existsSync('file.txt')) {
//     console.log('File exists!');
// } else {
//     console.log('No file found!');
// }

//renaming a file
// fs.rename('old.txt', 'new.txt', (err) => {
//     if (err) throw err;
//     console.log('File renamed!');
// });
 