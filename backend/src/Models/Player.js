const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
    },
    goals: {
        type: Number,
        default: 0
    },
    assists: {
        type: Number,
        default: 0
    },
    ycard: {
        type: Number,
        default: 0
    },
    rcard: {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model('Player', playerSchema);