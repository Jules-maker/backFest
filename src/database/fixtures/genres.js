const mongoose = require('mongoose');
require('dotenv').config()
const Genre = require('../models/genre.model');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const genres = [
    {
        name: 'Electro',
        artists: [], // Liste des ObjectId d'artistes associée (pour l'instant vide)
        events: [], // Liste des ObjectId d'événements associée (pour l'instant vide)
    },
    {
        name: 'Pop',
        artists: [],
        events: [],
    },
    {
        name: 'Rap/Hip-Hop',
        artists: [],
        events: [],
    },
    {
        name: 'R&B/Urban Pop',
        artists: [],
        events: [],
    },
    {
        name: 'Rock',
        artists: [],
        events: [],
    },
    {
        name: 'Metal',
        artists: [],
        events: [],
    },
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
