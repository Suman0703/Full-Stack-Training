// const { userModel } = require("../models/user.model");

// const userSignup=async(req, res)=>{
//     //postman works as a frontend framework
//     const {name, email,password,phoneNUmber,age }=req.body;
//     //console.log(req.body);
    
//    try {
//     const user=new userModel(name, email, password, phoneNUmber, age);

//     await user.save();
//     res.status(200).send("User data successfully stored in DB")
//    } catch (error) {
//     res.status(400).send({error:error})
//    }
//     }


// const userLogin=()=>{
    
// }
// module.exports={
//     userSignup
// }


const { userModel } = require("../models/user.model");

const userSignup =async(req,res)=>{
    const {name, email , password, phoneNumber, age} = req.body;

    console.log(req.body);
    

    try {
        const user = new userModel({name, email, password, phoneNumber, age});

        await user.save();
        res.status(200).send("Userdata successfully stored in DB");
    } catch (error) {
        res.status(400).send({error:error});
    }
}



const userLogin =()=>{

}

module.exports = {
    userSignup
    
}