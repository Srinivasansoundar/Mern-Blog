const express=require('express')
const router=express.Router()
const {verifyToken}=require("../utils/verifyUser")
const {create}=require('../controllers/post.controllers')
router.post('/create',verifyToken,create)
module.exports=router