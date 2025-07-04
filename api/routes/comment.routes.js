const express=require('express')
const router=express.Router()
const {verifyToken} =require("../utils/verifyUser")
const{createComment,deleteComment,editComment,getPostComments,getcomments,likeComment}=require("../controllers/comment.controller")
router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editComment/:commentId', verifyToken, editComment);
router.delete('/deleteComment/:commentId', verifyToken, deleteComment);
router.get('/getcomments', verifyToken, getcomments);
module.exports=router