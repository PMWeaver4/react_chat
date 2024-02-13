const mongoose = require("mongoose");
const room = require("./room");

const RoomSchema = new mongoose.Schema({
    
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
        
    
    
},
{
    //test this out when doing routes
    timestamps: true
}
);

module.exports = mongoose.model("room", RoomSchema);