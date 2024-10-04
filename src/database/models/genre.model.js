const mongoose = require('mongoose');
const schema = mongoose.Schema;

const genreSchema = schema({
        name: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

const Genre = mongoose.model('genre', genreSchema);

module.exports = Genre;
