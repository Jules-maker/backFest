const mongoose = require('mongoose');
require('dotenv').config()
const Genre = require('../models/genre.model');
const Artist = require('../models/artist.model');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const genres = [
    {name: 'Electro'},
    {name: 'Pop'},
    {name: 'Rap/Hip-Hop'},
    {name: 'R&B/Urban Pop'},
    {name: 'Rock'},
    {name: 'Metal'}
];

Genre.insertMany(genres)
    .then((insertedGenres) => {
        console.log('Genres inserted successfully!');

        // Récupérer les ObjectIds des genres
        const genreIds = {
            electro: insertedGenres.find(genre => genre.name === 'Electro')._id,
            pop: insertedGenres.find(genre => genre.name === 'Pop')._id,
            rap: insertedGenres.find(genre => genre.name === 'Rap/Hip-Hop')._id,
            rb: insertedGenres.find(genre => genre.name === 'R&B/Urban Pop')._id,
            rock: insertedGenres.find(genre => genre.name === 'Rock')._id,
            metal: insertedGenres.find(genre => genre.name === 'Metal')._id,
        };

        // Les artistes à insérer, en utilisant les ObjectIds des genres
        const artists = [
            {
                name: 'Gojira',
                bio: 'French metal band',
                genres: genreIds.metal,  // Utilisation de l'ObjectId du genre Metal
            },
            {
                name: 'Billie Eilish',
                bio: 'American pop singer',
                genres: genreIds.pop,  // Utilisation de l'ObjectId du genre Pop
            },
            {
                name: 'David Guetta',
                bio: 'French DJ and electronic music producer',
                genres: genreIds.electro,  // Utilisation de l'ObjectId du genre Electronic
            },
            {
                name: 'King Gizzard & the Lizard Wizard',
                bio: 'Australian rock band',
                genres: genreIds.rock,  // Utilisation de l'ObjectId du genre Rock
            }
        ];

        // Insérer les artistes
        return Artist.insertMany(artists);
    })
    .then(() => {
        console.log('Artists inserted successfully!');
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error('Error inserting data:', err);
        mongoose.connection.close();
    });
