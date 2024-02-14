const router = require("express").Router();

//Importing bcrypt
const bcrypt = require("bcrypt");

//Importing jsonwebtoken
const jwt = require("jsonwebtoken");

const User = require("../models/user");

//create
router.post("/create/", async(req,res) => {
    try{
        
            let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,12),
        });
        const newUser = await user.save();
        res.status(200).json({
            Created: newUser,
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            Error:err,
        });
    }
});

//login
router.post("/login", async (req,res) => {
    try {
        let {email, password} = req.body;
        const user = await User.findOne({email: email});

        if(!user) throw new Error("User not found");

        let passwordMatch = (password == user.password);
        //await bcrypt.compare(password, user.password)

        if(!passwordMatch) throw new Error("Invalid Details");

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {
        expiresIn: 60*60*24,
        });

        res.status(200).json({
            Msg: "User signed in!",
            User: user,
            Token: token
        });

    } catch(err){
        console.log(err);
        res.status(500).json({
            Error: err.message,
        });
    }
});

module.exports = router;