const mongoose = require("mongoose");
const room = require("./room");

const RoomSchema = new mongoose.Schema(
    {
    
        name: {
            type: String,
            required: true,
            unique: true
            //? Commented out line 11 on 2/17. Do we need minlength for name?
            // minlength: 1,
        },
        description: {
            type: String,
            required: true,

            minlength: 1,
        },
        addedUsers: {
            type: Array,
            minlength: 1,
        },
        
    },
    {
        //test this out when doing routes
        timestamps: true
    }
    );


module.exports = mongoose.model("room", RoomSchema);