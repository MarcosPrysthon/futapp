const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    players: {
        type: [mongoose.Schema.Types.Mixed], 
        ref: 'Player'
    },
    day: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Match', matchSchema);