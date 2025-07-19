const express = require("express");
const { userSignup, findUsersByAge, findUserNameById } = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.post("/signup", userSignup);
userRoute.get("/same-age", findUsersByAge);

//  New route: find name by user ID
userRoute.get("/name/:id", findUserNameById);

module.exports = {
    userRoute
}
// const {
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
// } = require("../controllers/user.controller");

// userRoute.post("/signup", userSignup);

// // New routes
// userRoute.get("/users-by-age", findUsersByAge); // ?age=18
// userRoute.get("/username/:id", findUserNameById);
// userRoute.delete("/deletemany", deleteManyUsers); // ?age=18
// userRoute.delete("/deleteone", deleteOneUser); // ?email=
// userRoute.get("/findall", findUsers);
// userRoute.get("/findone", findOneUser); // ?email=
// userRoute.patch("/updateone", updateOneUser); // ?email=
// userRoute.patch("/updatemany", updateManyUsers); // ?age=
// userRoute.delete("/findbyidanddelete/:id", findByIdAndDeleteUser);
// userRoute.patch("/findbyidandupdate/:id", findByIdAndUpdateUser);
