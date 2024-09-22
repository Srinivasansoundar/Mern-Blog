const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");
const userRoutes=require("./routes/user.routes.js")
const authRoutes=require("./routes/auth.routes.js")
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

app.listen(3000, () => {
    console.log("SERVER IS RUNNING ON PORT 3000")
})
app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)
app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message || "Internal Server Error";
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})