const User = require("../modal/user.modal.js")
const bcryptjs=require("bcryptjs")
const {errorHandler}=require("../utils/error.js")
module.exports.signup = async (req, res,next) => {
   const { username, email, password } = req.body;
   if (!username || !email || !password || username === "" || email === "" || password === "") {
      // return res.status(400).json({ message: "All fields are required" })
      return next(errorHandler(400,"All field are required"))
   }
   const hashedPassword=bcryptjs.hashSync(password,10)
   const newUser = new User({
      username,
      email,
      password:hashedPassword,
   })
   try {
      await newUser.save();
      res.json("Signup is succesful")
   }
   catch(err){
      next(err)
   }
}