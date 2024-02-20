const mongoose = require("mongoose");
const room = require("./room");

const RoomSchema = new mongoose.Schema({
    
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        addedUsers: {
            type: Array,
            minlength: 1,
        },
    },
    
   );


module.exports = mongoose.model("room", RoomSchema);