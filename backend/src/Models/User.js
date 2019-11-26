const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },

    matches: {
        type: [mongoose.Schema.Types.Mixed],
        ref: 'Match'
    }

});

module.exports = mongoose.model('User', UserSchema);