const mongoose = require('mongoose');
require('dotenv').config();
const Day = require('../models/day.model');
const Venue = require('../models/venue.model');
const Genre = require('../models/genre.model');
const Artist = require('../models/artist.model');
const Event = require('../models/event.model');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const days = [
    { date: new Date('2025-07-17') },
    { date: new Date('2025-07-18') },
    { date: new Date('2025-07-19') },
    { date: new Date('2025-07-20') },
];

const venues = [
    {
        name: 'Main Stage',
        location: {
            lat: 49.44430296461854,
            lng: 1.0537332888960669,
        },
    },
    {
        name: 'Chai à vin',
        location: {
            lat: 49.44546381087562,
            lng: 1.0580005274141007,
        },
    },
];

const genres = [
    { name: 'Electro' },
    { name: 'Pop' },
    { name: 'Rap/Hip-Hop' },
    { name: 'R&B/Urban Pop' },
    { name: 'Rock' },
    { name: 'Metal' }
];

async function insertData() {
    try {
        const insertedDays = await Day.insertMany(days);
        console.log('Days inserted successfully!');

        const insertedVenues = await Venue.insertMany(venues);
        console.log('Venues inserted successfully!');

        const insertedGenres = await Genre.insertMany(genres);
        console.log('Genres inserted successfully!');

        const genreIds = {
            electro: insertedGenres.find(genre => genre.name === 'Electro')._id,
            pop: insertedGenres.find(genre => genre.name === 'Pop')._id,
            rap: insertedGenres.find(genre => genre.name === 'Rap/Hip-Hop')._id,
            rb: insertedGenres.find(genre => genre.name === 'R&B/Urban Pop')._id,
            rock: insertedGenres.find(genre => genre.name === 'Rock')._id,
            metal: insertedGenres.find(genre => genre.name === 'Metal')._id,
        };

        const artists = [
            {
                name: 'Gojira',
                bio: 'French metal band',
                genres: genreIds.metal,
                image: '/images/artistes/gojira.jpg',
            },
            {
                name: 'Billie Eilish',
                bio: 'American pop singer',
                genres: genreIds.pop,
            },
            {
                name: 'David Guetta',
                bio: 'French DJ and electronic music producer',
                genres: genreIds.electro,
            },
            {
                name: 'King Gizzard & the Lizard Wizard',
                bio: 'Australian rock band',
                genres: genreIds.rock,
            }
        ];

        const insertedArtists = await Artist.insertMany(artists);
        console.log('Artists inserted successfully!');

        const artistIds = {
            gojira: insertedArtists.find(artist => artist.name === 'Gojira')._id,
            billie: insertedArtists.find(artist => artist.name === 'Billie Eilish')._id,
            guetta: insertedArtists.find(artist => artist.name === 'David Guetta')._id,
            gizzard: insertedArtists.find(artist => artist.name === 'King Gizzard & the Lizard Wizard')._id,
        };

        const events = [
            {
                name: 'Gojira Concert',
                description: 'Live performance by Gojira',
                startTime: '20:00',
                endTime: '22:00',
                day: insertedDays[0]._id,
                artist: artistIds.gojira,
                location: insertedVenues[0]._id,
            },
            {
                name: 'Billie Eilish Concert',
                description: 'Live performance by Billie Eilish',
                startTime: '18:00',
                endTime: '20:00',
                day: insertedDays[1]._id,
                artist: artistIds.billie,
                location: insertedVenues[1]._id,
            },
            {
                name: 'David Guetta DJ Set',
                description: 'DJ set by David Guetta',
                startTime: '22:00',
                endTime: '00:00',
                day: insertedDays[2]._id,
                artist: artistIds.guetta,
                location: insertedVenues[0]._id,
            },
            {
                name: 'King Gizzard & the Lizard Wizard Concert',
                description: 'Live performance by King Gizzard & the Lizard Wizard',
                startTime: '20:00',
                endTime: '22:00',
                day: insertedDays[3]._id,
                artist: artistIds.gizzard,
                location: insertedVenues[1]._id,
            }
        ];

        await Event.insertMany(events);
        console.log('Events inserted successfully!');
    } catch (err) {
        console.error('Error inserting data:', err);
    } finally {
        mongoose.connection.close();
    }
}

insertData();