const router = require("express").Router();

const Room = require("../models/room");


router.post("/create/", async(req,res) => {
    try{
        
            let post = new Room({
            name: req.body.name,
            description: req.body.description,
            addedUsers: req.body.addedUsers,
            
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

// [PUT] Adding Update Endpoint

router.put("/update/:id", (req, res) => {
    try {
        // Grabbing the index of an item/obj that matches our param id
        let indexOfItem = db.finIndex((i) => i.Room == req.params.id);

        db[indexOfItem] = {
            name: req.params.name,
            description: req.body.description,
            addedUsers: req.body.addedUsers,
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

// [DELETE] - Remove an item from the db
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

