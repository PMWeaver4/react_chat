const router = require("express").Router();

const Message = require("../models/message");

router.post("/create/", async(req,res) => {
    try{
        
            let post = new Message({
            when: req.body.when,
            user: req.body.user,
            room: req.body.room,
            body: req.body.body,
        });
        const newPost = await post.save();
        res.status(200).json({
            Created: newPost,
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            Error:err,
        });
    }
});



module.exports = router;