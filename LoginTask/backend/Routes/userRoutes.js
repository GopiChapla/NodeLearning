const router=require("express").Router();
const user=require("../Controller/userController");

// Add User
router.post("/adduser",user.addUser);

//Login 
router.post("/login",user.getUser);


// router.post("/authuser",user.authUser,user.getAuthUser);

module.exports=router;