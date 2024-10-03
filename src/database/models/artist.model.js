const mongoose = require('mongoose');
const schema = mongoose.Schema;

const artistSchema = schema({
        name: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            required: true,
        },
        genres: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Genre',
        }],
        image: {
            type: String,
        },
        socialMedia: {
            instagram: String,
            twitter: String,
        },
        spotify: {
            type: String,
        },
        events: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
        }],
    },
    {timestamps: true}
);

const Artist = mongoose.model('artist', artistSchema);

module.exports = Artist;
