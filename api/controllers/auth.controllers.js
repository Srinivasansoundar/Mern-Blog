const User = require("../modal/user.modal.js")
const bcryptjs=require("bcryptjs")
module.exports.signup = async (req, res) => {
   const { username, email, password } = req.body;
   if (!username || !email || !password || username === "" || email === "" || password === "") {
      return res.status(400).json({ message: "All fields are required" })
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
      res.status(500).json({message:err.message})
   }
}