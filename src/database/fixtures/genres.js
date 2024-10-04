const mongoose = require('mongoose');
require('dotenv').config()
const Genre = require('../models/genre.model');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const genres = [
    {name: 'Electro'},
    {name: 'Pop'},
    {name: 'Rap/Hip-Hop'},
    {name: 'R&B/Urban Pop'},
    {name: 'Rock'},
    {name: 'Metal'},
];

Genre.insertMany(genres)
    .then(() => {
        console.log('Genres inserted successfully!');
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error('Error inserting genres:', err);
        mongoose.connection.close();
    });
