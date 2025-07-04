const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");
const userRoutes=require("./routes/user.routes.js")
const authRoutes=require("./routes/auth.routes.js")
const postRoutes=require('./routes/post.routes.js')
const commentRoutes=require('./routes/comment.routes.js')
const cookieParser=require("cookie-parser")
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json())
// to parse json into req.body
app.use(cookieParser())
// use cookieParser() not cookieParser 
app.listen(3000, () => {
    console.log("SERVER IS RUNNING ON PORT 3000")
})
app.get("/test",(req,res)=>{
  res.json({message:"hello"})
})
app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/post",postRoutes)
app.use("/api/comment",commentRoutes)
app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message || "Internal Server Error";
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})