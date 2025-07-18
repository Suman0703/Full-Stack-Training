const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt");

// User Signup
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
        bcrypt.hash(password, 7, async (err, hash) => {
            if (err) {
                return res.status(400).send("Error while hashing!");
            } else {
                const user = new userModel({ name, email, password: hash, phoneNumber, age });
                await user.save();
                res.status(200).send("Userdata successfully stored in DB");
            }
        });

    } catch (error) {
        res.status(400).send({ error: error });
    }
};

// Find users with same age
//GET http://localhost:8080/same-age?age=18
const findUsersByAge = async (req, res) => {
    const { age } = req.query;

    try {
        const users = await userModel.find({ age: Number(age) });

        if (users.length === 0) {
            return res.status(404).send("No users found with this age.");
        }

        res.status(200).send(users);
    } catch (error) {
        res.status(500).send("Error while fetching users.");
    }
};

// Find user name by ID
//GET http://localhost:8080/name/66ab1cf52b2f6caa7b9d1234
const findUserNameById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await userModel.findById(id);

        if (!user) {
            return res.status(404).send("User not found.");
        }

        res.status(200).send({ name: user.name });
    } catch (error) {
        res.status(500).send("Error while finding user by ID.");
    }
};
// 3. Extra Mongoose methods — for testing
// const deleteManyUsers = async (req, res) => {
//     const result = await userModel.deleteMany({ age: req.query.age });
//     res.send(result);
// };

// const deleteOneUser = async (req, res) => {
//     const result = await userModel.deleteOne({ email: req.query.email });
//     res.send(result);
// };

// const findUsers = async (req, res) => {
//     const result = await userModel.find({});
//     res.send(result);
// };

// const findOneUser = async (req, res) => {
//     const result = await userModel.findOne({ email: req.query.email });
//     res.send(result);
// };

// const updateOneUser = async (req, res) => {
//     const result = await userModel.updateOne(
//         { email: req.query.email },
//         { $set: { name: req.body.name } }
//     );
//     res.send(result);
// };

// const updateManyUsers = async (req, res) => {
//     const result = await userModel.updateMany(
//         { age: req.query.age },
//         { $set: { name: req.body.name } }
//     );
//     res.send(result);
// };

// const findByIdAndDeleteUser = async (req, res) => {
//     const result = await userModel.findByIdAndDelete(req.params.id);
//     res.send(result);
// };

// const findByIdAndUpdateUser = async (req, res) => {
//     const result = await userModel.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
//     res.send(result);
// };

// // Export everything together
// module.exports = {
//     userSignup,
//     findUsersByAge,
//     findUserNameById,
//     deleteManyUsers,
//     deleteOneUser,
//     findUsers,
//     findOneUser,
//     updateOneUser,
//     updateManyUsers,
//     findByIdAndDeleteUser,
//     findByIdAndUpdateUser
// };
const userLogin = () => {}

module.exports = {
    userSignup,
    findUsersByAge,
    findUserNameById
};
