const router = require("express").Router();

//? Adding validate from middleware. Please check if this is correct.
// const validate = require("../middleware/validate");

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
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            Error: err,
        });
    }
});

// Display all rooms endpoint

  router.get("/all", async (req, res) => {
    try {
        let results = await Room.find().select( ["name", "description", "addedUsers"]);
        res.status(200).json({
            Results: results,
        });
    } catch (err) {
        res.status(500).json({
            Error: err,
        });
    }
});







// [PUT] Adding Update Endpoint

router.put("/update/:name", async (req, res) => {
    try {
        
        const roomToUpdate = await Room.findOne({name: req.params.name}).exec();
        let newUsers = [...roomToUpdate.addedUsers];
        newUsers.push(...req.body.addedUsers);
        newUsers = newUsers.filter((user) => !req.body.removedUsers.includes(user));
        // console.log(newUsers);
        
        const roomUpdated = await roomToUpdate.updateOne( {
            name: req.body.name,
            description: req.body.description,
            addedUsers: newUsers,
            

        }  ).exec();

        // const roomReturnUPdated = {};
        const roomReturnUPdated = await Room.findOne({name: req.body.name}).exec();
        console.log(`roomReturn ${roomReturnUPdated}`);

        res.status(200).json({
            Updated: roomReturnUPdated,
            Results: roomReturnUPdated,
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
        //Room.delete
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

