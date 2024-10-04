const mongoose = require('mongoose');
const schema = mongoose.Schema;

const eventSchema = schema({
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        startTime: {
            type: String,  // Format attendu : 'HH:mm'
            required: true,
        },
        endTime: {
            type: String,  // Format attendu : 'HH:mm'
            required: true,
        },
        day: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Day',
        }],
        artist: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artist',
        }],
        location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Venue',
            required: true,
        },
    },
    {timestamps: true}
);

const Event = mongoose.model("event", eventSchema);

module.exports = Event;
