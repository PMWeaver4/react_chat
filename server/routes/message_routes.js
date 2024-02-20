const router = require("express").Router();

const Message = require("../models/message");



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

        const Count = await Message.countDocuments({});

        let post = new Message({
            msg_id: Count,
            user: req.body.user,
            room: req.body.room,
            body: req.body.body,
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
        

        const updated = await Message.findOneAndUpdate(filter, update,{new: true});

        res.status(200).json({
            Results: updated,

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

        // const message = await Message.findByIdAndDelete(req.params.id);
        const allResults = await Message.find().populate
        ("message", [
            "when",
            "user",
            "room",
            "body",
            "msg_id",
        ]);

            if (!message) throw new Error("Message not found");

            res.status(200).json({
                
                Deleted: 1,
                Results: allResults,
            });
        } catch (err) {
            res.status(500).json({
                Error: err,
            });
        }
    });


module.exports = router;


//commenting