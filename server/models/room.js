const mongoose = require("mongoose");
const room = require("./room");

const RoomSchema = new mongoose.Schema({
    
        name: {type: String,
            required: true,
            minlength: 1},
        descrition: {type: String,
            required: true,
            minlength: 1},
        addUsers: {
            type: Array,
        },
        
    
    
},
{
    //test this out when doing routes
    timestamps: true
}
);

module.exports = mongoose.model("room", RoomSchema);