const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name:{
        type: String
    },
    mobile:{
        type: Number
    },
    email:{
        type: String
    },
    password:{
        type: String
    }, 
    active:{
        type: Boolean,
        default: true
    }
});

const registerModel = mongoose.model("register",registerSchema);
module.exports = registerModel;
