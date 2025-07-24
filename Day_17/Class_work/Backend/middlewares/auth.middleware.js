const jwt = require("jsonwebtoken");

const { userModel } = require("../models/user.model");

const auth = async (req, res, next) => {
 const token = req.headers.authorization;
 console.log(token);

   if (!token) {
    return res.status(400).send(" INVALID Token");
  }
 try {
    //we created a token and checked it on postman
    var decoded = jwt.verify(token,process.env.SECRET);
    const userID = decoded.userID;
    const matchedUser = await userModel.findOne({_id:userID});
    if(matchedUser){
       req.headers = decoded.userID;
       next();
    }else{
         return res.status(400).send({msg:"user not authorized"});
    }

  } catch (error) {

    return res.status(400).send({mgs:error.message});
    
  }
 
}
 module.exports = { 
    auth
}
