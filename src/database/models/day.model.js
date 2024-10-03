const mongoose = require('mongoose');
const schema = mongoose.Schema;

const daySchema = schema({
        date: {
            type: Date,
            required: true,
            unique: true
        }
    },
    {timestamps: true}
);

const Day = mongoose.model('day', daySchema);

module.exports = Day;
