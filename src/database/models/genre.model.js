const mongoose = require('mongoose');
const schema = mongoose.Schema;

const genreSchema = schema({
        name: {
            type: String,
            required: true,
        },
        artists: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artist',
        }],
        events: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
        }],
    },
    {timestamps: true}
);

const Genre = mongoose.model('genre', genreSchema);

module.exports = Genre;
