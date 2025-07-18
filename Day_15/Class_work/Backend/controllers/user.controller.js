const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt");


const userSignup = async (req, res) => {
    const { name, email, password, phoneNumber, age } = req.body;
    console.log(req.body);

    // This checks if a user already exists in the database with the same email.
    // It's a read operation using Mongoose.
    const userExist = await userModel.findOne({ email });

    if (userExist) {
        return res.status(400).send("User already exists!");
    }
    
    try {
        //Hash the password and save user
        bcrypt.hash(password, 7, async (err, hash) => {
            if (err) {
                return res.status(400).send("Error while hashing!");
            } else {
                const user = new userModel({ name, email, password: hash, phoneNumber, age });
                // This saves the new user object to MongoDB.
                await user.save();
                res.status(200).send("Userdata successfully stored in DB");
            }
        });

    } catch (error) {
        res.status(400).send({ error: error });
    }
}



const userLogin = () => {

}


module.exports = {
    userSignup

}






// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//  myPlaintextPassword- userpass
//  saltRounds- pass pass hardness

// Store hash in your password DB.
// });