const mongoose = require('mongoose');
require('dotenv').config()
const Day = require('../models/day.model');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const days = [
    { date: new Date('2025-07-17') },
    { date: new Date('2025-07-18') },
    { date: new Date('2025-07-19') },
    { date: new Date('2025-07-20') },
];

Day.insertMany(days)
    .then(() => {
        console.log('Days inserted successfully!');
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error('Error inserting days:', err);
        mongoose.connection.close();
    });
