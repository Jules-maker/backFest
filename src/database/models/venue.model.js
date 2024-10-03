const mongoose = require('mongoose');
const schema = mongoose.Schema;

const venueSchema = schema({
        name: {
            type: String,
            required: true,
        },
        location: {
            lat: {
                type: Number,
                required: true,
            },
            lng: {
                type: Number,
                required: true,
            },
        },
        events: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
        }],
    },
    {timestamps: true}
);

const Venue = mongoose.model('venue', venueSchema);

module.exports = Venue;
