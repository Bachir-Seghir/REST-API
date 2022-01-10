const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        uniaque: true
    },
    email: {
        type: String,
        required: true,
        uniaque: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    // mongoose uses another function
    //createdAt: Date.now(),
},
{ timestamps: true },
)

module.exports = mongoose.model("User", UserSchema)