const router = require("express").Router();

const Message = require("../models/message");
// const Room = require("../models/room");
// const db = require("./seed_data/seed_data.json");



//display all in a room
router.get("/get_room/:room", async(req,res) => {
    try{
        
        
        let filtered = await Message.find({room: req.params.room}).populate("room").select(["when", "user", "body"])
        console.log("anything");

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
        
            let post = new Message({
            // when: req.body.when,
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


//update
router.put("/update/:id", (req, res) => {
    try {
        // Grabbing the index of an item/obj that matches our param id
        let indexOfItem = db.finIndex((i) => i.Message == req.params.id);

        db[indexOfItem] = {
            when: req.params.when,
            user: req.body.user,//come from list of users
            room: req.body.room,//room should come from some list of rooms
            body: req.body.body

        };
        res.status(200).json({
            Updated: db[indexOfItem],
            Results: db,
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
        // Need to add fs for delete
        // fs.unlink('mynewfile2.txt', function (err) {
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