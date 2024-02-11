const mongoose = require("mongoose");
const message = require("./message");

const MessageSchema = new mongoose.Schema({
    text: {
        when: {type: String,
            required: true,
            minlength: 1},
        user: {type: String,
            required: true,
            minlength: 1},
        room: {type: String,
            required: true,
            minlength: 1},
        body: {type: String,
            required: true,
            minlength: 1},
    }
    
});

module.exports = mongoose.model("message", MessageSchema);