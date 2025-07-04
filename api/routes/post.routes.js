const express=require('express')
const router=express.Router()
const {verifyToken}=require("../utils/verifyUser")
const {create,getposts,deletepost, updatepost}=require('../controllers/post.controllers')
router.post('/create',verifyToken,create)
router.get('/getposts',getposts)
router.delete('/deletepost/:postId/:userId',verifyToken,deletepost)
router.put('/updatepost/:postId/:userId',verifyToken,updatepost)
module.exports=router