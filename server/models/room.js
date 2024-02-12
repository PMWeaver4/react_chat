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
// HEAD:server/routers/room.js
        addUsers: {},
//
        addUsers: {
            type: Array,
        },
// 59c297e8c7ff53ab6051c03f1eafd42a5c263b26:server/models/room.js
        
    }
    
});

module.exports = mongoose.model("room", RoomSchema);