const router = require("express").Router();

const Message = require("../models/message");
// const User = require("../models/user");
const Room = require("../models/room");
const user = require("../models/user");



//display all in a room
router.get("/get_room/:room", async(req,res) => {
    try{
        
        
        let filtered = await Message.find({room: req.params.room}).populate("room").select(["when", "user", "body"])
        
        res.status(200).json({
            Results: filtered
        });

    } catch(err) {
        console.log(err);
        console.log(req.params.id);
        res.status(500).json({
            Error:err,
    });
}
})

// creat a message
router.post("/create/", async(req,res) => {
    
    try{
        //create a count to give messages incremental id number
        const Count = await Message.countDocuments({});
        
        let post = new Message({
            msg_id: Count,
            room: req.body.room_id,
            body: req.body.body,
            user: req.user._id,
        });
        const newPost = await post.save();
        console.log(Count);
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


//update
router.put("/update/:room/:id", async (req, res) => {
    try {
        const filter = {room: req.params.room, msg_id: req.params.id};
        const update = {room: req.body.room,body: req.body.body};
        

        const filtered = await Message.findOneAndUpdate(filter, update,{new: true});

        res.status(200).json({
            Results: filtered,

        });
    } catch (err) {
        res.status(500).json({
            Error: err,
        });
    }
});

//delete......
router.delete("/delete/:room/:id", async (req, res) => {
    try {
        const filter = {room: req.params.room, msg_id: req.params.id};

        await Message.findOneAndDelete(filter);


            
            res.status(200).json({
                Deleted: 1,
            });
        } catch (err) {
            res.status(500).json({
                Error: err,
            });
        }
    });


module.exports = router;