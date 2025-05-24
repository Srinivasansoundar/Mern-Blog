const express=require('express')
const router=express.Router()
const {verifyToken}=require("../utils/verifyUser")
const {create,getposts}=require('../controllers/post.controllers')
router.post('/create',verifyToken,create)
router.get('/getposts',getposts)
module.exports=router