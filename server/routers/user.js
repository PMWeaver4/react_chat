const mongoose = require("mongoose");
const user = require("./user");

const UserSchema = new mongoose.Schema({
    text: {
        firstName: {type: String,
            required: true,
            minlength: 1},
        lastName: {type: String,
            required: true,
            minlength: 1},
        email: {type: String,
            required: true,
            minlength: 1},
        password: {type: String,
            required: true,
            minlength: 1},
    }
    
});

module.exports = mongoose.model("user", UserSchema);