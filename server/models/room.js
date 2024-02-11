const mongoose = require("mongoose");
const room = require("./roon");

const RoomSchema = new mongoose.Schema({
    text: {
        name: {type: String,
            required: true,
            minlength: 1},
        descrition: {type: String,
            required: true,
            minlength: 1},
        addUsers: {
            type: Array,
        },
        
    }
    
});

module.exports = mongoose.model("room", RoomSchema);