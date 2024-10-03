const mongoose = require('mongoose');
require('dotenv').config()
const Venue = require('../models/venue.model');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const venues = [
    {
        name: 'Main Stage',
        location: {
            lat: 49.44430296461854,
            lng: 1.0537332888960669,
        },
        events: [], // Liste des ObjectId d'événements associée (pour l'instant vide)
    },
    {
        name: 'Chai à vin',
        location: {
            lat: 49.44546381087562,
            lng: 1.0580005274141007,
        },
        events: [], // Liste des ObjectId d'événements associée (pour l'instant vide)
    },
];

Venue.insertMany(venues)
    .then(() => {
        console.log('Venues inserted successfully!');
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error('Error inserting venues:', err);
        mongoose.connection.close();
    });
