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
        // Grabbing the index of an item/obj that matches our param id
        // let indexOfItem = Message.findIndex((i) => i.Message == req.params.id);
        // let filtered = await Message.find({room: req.params.room}).populate("room").select("body");
        // let whichFiltered = await (await filtered.find({msg_id: req.params.id}).populate("msg_id")).select("body");
        console.log(req.params.room, req.params.id);
        let filtered = await Message.find({room: req.params.room, msg_id: req.params.id}).populate("room").select(["when", "user", "body", "msg_id"])
        console.log(filtered);

        res.status(200).json({
            Results: filtered,
            //now let's change this to be like updates in other projects

        });
    } catch (err) {
        res.status(500).json({
            Error: err,
        });
    }
});

//delete......
router.delete("/delete/:id", (req, res) => {
    try {
        let indexOfItem = db.findIndex((i) => i.Room == req.params.id);
        db.splice(indexOfItem, 1);
        db.forEach((i, idx) => {
            i.Room = idx + 1;
        });

            if (err) throw err;
            res.status(200).json({
                Deleted: 1,
                Results: db,
            });
        } catch (err) {
            res.status(500).json({
                Error: err,
            });
        }
    });


module.exports = router;