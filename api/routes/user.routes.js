const express=require("express");
const {test}=require("../controllers/user.controllers")
const router=express.Router();
const {verifyToken}=require("../utils/verifyUser")
const {updateUser}=require("../controllers/user.controllers")
router.get("/test",test)
router.put('/update/:userId',verifyToken,updateUser)
module.exports=router;