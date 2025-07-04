const express=require("express");
const {test}=require("../controllers/user.controllers")
const router=express.Router();
const {verifyToken}=require("../utils/verifyUser")
const {updateUser,deleteUser,signout,getUsers,getUser}=require("../controllers/user.controllers")
router.get("/test",test)
router.put('/update/:userId',verifyToken,updateUser)
router.delete('/delete/:userId',verifyToken,deleteUser)
router.post('/signout',signout)
router.get('/getusers',verifyToken,getUsers)
router.get('/:userId',getUser)
module.exports=router;