const mongoose = require("mongoose");
const message = require("./message");

const MessageSchema = new mongoose.Schema(
    {
    
        when: {type: Date,
            required: true,
            default: Date.now,
        },
        user: {type: String,
            required: true,
            minlength: 1},
        room: {type: String,
            required: true,
            minlength: 1},
        body: {type: String,
            required: true,
            minlength: 1},
        msg_id: {type: String,
            // required: true,
            // minlength: 1
        },
   
    
}, 
{
    //test this out when doing routes
    timestamps: true
}
);

module.exports = mongoose.model("message", MessageSchema);