const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const userRoutes=require("./routes/user.routes.js")
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
    console.log("SERVER IS RUNNING ON PORT 3000")
})
app.use("/api/user",userRoutes)