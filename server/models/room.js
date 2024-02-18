const mongoose = require("mongoose");
const room = require("./room");

const RoomSchema = new mongoose.Schema({
    
        name: {
            type: String,
            required: true,

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

 //? Redid user coding 2/17. Let me know if this works or not.       
//        addedUsers: {
//            type: [String],
//            required: true,
//        }
// I commented out line 25-31 so line 20 can be tested on your end. 2/17 TC

// HEAD:server/routers/room.js
//         addUsers: {},        
// 
//        addUsers: {
//            type: Array,
 //       },
// 59c297e8c7ff53ab6051c03f1eafd42a5c263b26:server/models/room.js
           
);
{
    //test this out when doing routes
    timestamps: true
};


module.exports = mongoose.model("room", RoomSchema);