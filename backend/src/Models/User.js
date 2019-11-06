const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    "name": {
        type: String,
        required: true,
        min: 2
    },
    "email":{
        type: String,
        required: true,
    },
    "password":{
        type: String,
        required: true,
    },
    "DD":{
        type: Number,
        default: 0
    },
    "goals":{
        type: Number,
        default: 0
    },
    "assists":{
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('User', UserSchema);