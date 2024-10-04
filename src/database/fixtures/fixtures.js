const mongoose = require('mongoose');
require('dotenv').config();
const Day = require('../models/day.model');
const Venue = require('../models/venue.model');
const Genre = require('../models/genre.model');
const Artist = require('../models/artist.model');
const Event = require('../models/event.model');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const days = [
    { date: new Date('2025-08-14') },
    { date: new Date('2025-08-15') },
    { date: new Date('2025-08-16') },
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
    {
        name: 'Les wrappettes',
        location: {
            lat: 49.44515216780313,
            lng: 1.0588677914654632,
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
                bio: "Préparez-vous à une déferlante de puissance avec Gojira ! Ce groupe de metal français, réputé pour ses riffs explosifs et ses performances scéniques phénoménales, vous plongera dans un univers sonore intense. Avec des thèmes profonds et engagés, leurs chansons ne sont pas seulement des morceaux, mais des hymnes à la planète. Leurs concerts sont de véritables cérémonies où chaque note résonne comme un cri de ralliement. Ne manquez pas l'occasion de vivre cette expérience cathartique !",
                genres: genreIds.metal,  // Utilisation de l'ObjectId du genre Metal
                image: '/images/artistes/gojira.jpg',
            },
            {
                name: 'Billie Eilish',
                bio: " Préparez-vous à être éblouis par la talentueuse Billie Eilish ! Avec sa voix envoûtante et ses textes profonds, elle redéfinit la pop moderne. Sa présence sur scène est à couper le souffle, alliant intensité et vulnérabilité, et chaque performance est une véritable expérience immersive. Billie, c'est l'artiste qui fait parler de la génération actuelle et qui captive le monde entier avec son style unique. Ne ratez pas cette occasion de la voir en live !",
                genres: genreIds.pop,  // Utilisation de l'ObjectId du genre Pop
                image: '/images/artistes/billie-eilish.jpg',
            },
            {
                name: 'David Guetta',
                bio: "Préparez-vous à faire la fête avec le maestro de la dance music, David Guetta ! Véritable icône de la scène électro, ses performances sont des explosions de joie et d'énergie, où chaque morceau est un hymne à la fête. Avec David, attendez-vous à un show inoubliable qui vous fera bouger jusqu’au bout de la nuit !",
                genres: genreIds.electro,  // Utilisation de l'ObjectId du genre Electronic
                image: '/images/artistes/david-guetta.jpg',
            },
            {
                name: 'King Gizzard & the Lizard Wizard',
                bio: 'King Gizzard & the Lizard Wizard, le groupe de rock psychédélique australien, vous emmène dans un voyage musical unique. Leurs performances sont des expériences sensorielles intenses, mêlant riffs hypnotiques et rythmes envoûtants. Avec leur créativité débordante et leur énergie débordante, ils vous transporteront dans un univers parallèle où la musique est reine. Ne manquez pas cette occasion de vivre une expérience musicale hors du commun !',
                genres: genreIds.rock,  // Utilisation de l'ObjectId du genre Rock
                image: '/images/artistes/king-gizzard.jpg',
            },
            {
                name: 'Stromaé',
                bio: "Stromae, l'artiste aux mille facettes, mélange habilement la musique pop et hip-hop avec des textes poignants et des rythmes entraînants. Après un retour très attendu, il continue d’éblouir le public avec ses performances scéniques captivantes et ses mélodies accrocheuses.",
                genres: genreIds.pop,  // Utilisation de l'ObjectId du genre Rap/Hip-Hop
                image: '/images/artistes/stromae.jpg',
            },
            {
                name: 'Angèle',
                bio: 'Angèle, la sensation pop belge, enchante les foules avec sa voix douce et ses paroles réfléchies. Elle aborde des thèmes contemporains tout en restant accessible, offrant des spectacles visuellement impressionnants.',
                genres: genreIds.pop,  // Utilisation de l'ObjectId du genre R&B/Urban Pop
                image: '/images/artistes/angele.jpg',
            },
            {
                name: 'Louane',
                bio: "Louane, la chanteuse et actrice française, vous charmera avec sa voix douce et ses mélodies touchantes. Ses performances sont empreintes d'émotion et de sincérité, faisant d'elle une artiste incontournable de la scène musicale française.",
                genres: genreIds.pop,  // Utilisation de l'ObjectId du genre Pop
                image: '/images/artistes/louane.jpg',
            },
            {
                name: 'Vianney',
                bio: "Vianney, le chanteur-compositeur français, est connu pour ses chansons sincères et ses mélodies accrocheuses. Avec sa guitare et sa voix chaleureuse, il crée une atmosphère intime et authentique à chaque concert.",
                genres: genreIds.pop,  // Utilisation de l'ObjectId du genre Pop
                image: '/images/artistes/vianney.jpg',
            },
            {
                name: 'Julien Doré',
                bio: "Julien Doré, l'artiste aux multiples talents, vous séduira avec son style unique et ses performances captivantes. Ses chansons, à la fois poétiques et entraînantes, vous transporteront dans son univers singulier.",
                genres: genreIds.pop,  // Utilisation de l'ObjectId du genre Pop
                image: '/images/artistes/julien-dore.jpg',
            },
            {
                name: 'Aya Nakamura',
                bio: "Aya Nakamura, la reine de l'urban pop, vous fera danser avec ses rythmes entraînants et ses paroles percutantes. Ses concerts sont de véritables fêtes où l'énergie et la bonne humeur sont au rendez-vous.",
                genres: genreIds.rb,  // Utilisation de l'ObjectId du genre R&B/Urban Pop
                image: '/images/artistes/aya-nakamura.jpg',
            },
            {
                name: 'Slimane',
                bio: "Slimane, le chanteur à la voix puissante et émotive, vous touchera avec ses chansons sincères et ses performances passionnées. Il aborde des thèmes universels avec une sensibilité qui résonne auprès de tous.",
                genres: genreIds.rb,  // Utilisation de l'ObjectId du genre R&B/Urban Pop
                image: '/images/artistes/slimane.jpg',
            },
            {
                name: 'Dadju',
                bio: "Chaleur, soleil et dans, venez assister à une explosion musicale ! Dadju mélange habilement les genres pour créer des chansons uniques et accrocheuses. Ses performances sont dynamiques et pleines de charme, faisant de lui un artiste incontournable.",
                genres: genreIds.rb,  // Utilisation de l'ObjectId du genre R&B/Urban Pop
                image: '/images/artistes/dadju.jpg',
            },
            {
                name: 'Eddy de Pretto',
                bio: "Eddy de Pretto, le chanteur à la voix singulière et aux textes percutants, vous captivera avec ses performances intenses et authentiques, abordant des sujets contemporains avec une honnêteté désarmante.",
                genres: genreIds.rap,  // Utilisation de l'ObjectId du genre Rap/Hip-Hop
                image: '/images/artistes/eddy-de-pretto.jpg',
            },
            {
                name: 'Madeon',
                bio: "Madeon, le prodige de la musique électronique, vous fera vibrer avec ses compositions innovantes et ses performances électrisantes. Chaque concert est une expérience immersive où la musique et les visuels se mêlent harmonieusement.",
                genres: genreIds.electro,  // Utilisation de l'ObjectId du genre Electro
                image: '/images/artistes/madeon.jpg',
            },
            {
                name: 'Vitalic',
                bio: "Vitalic, le maître de l'électro, vous transportera dans un univers sonore puissant et envoûtant. Ses performances sont des voyages sensoriels où chaque note résonne avec intensité.",
                genres: genreIds.electro,  // Utilisation de l'ObjectId du genre Electro
                image: '/images/artistes/vitalic.jpg',
            },
            {
                name: 'Merkaat',
                bio: "Partie intégrante de la scène montante de l'électro, Merkaat vous fera danser avec ses rythmes entraînants et ses mélodies envoûtantes. Ses performances sont des moments de pure énergie et de bonne humeur, où la musique est reine.",
                genres: genreIds.electro,  // Utilisation de l'ObjectId du genre Rock
                image: '/images/artistes/merkaat.jpg',
            },
            {
                name: 'Petit Biscuit',
                bio: "Petit Biscuit, le jeune prodige de l'électro, vous envoûtera avec ses mélodies douces et ses rythmes entraînants. Ses performances sont des moments de pure magie où la musique vous transporte dans un autre monde.",
                genres: genreIds.electro,  // Utilisation de l'ObjectId du genre Electro
                image: '/images/artistes/petit-biscuit.jpg',
            },
            {
                name: 'Daft Punk',
                bio: "Daft Punk, les légendes de la musique électronique, vous feront vivre une expérience inoubliable avec leurs performances spectaculaires et leurs hits intemporels. Leur musique est une célébration de la fête et de la créativité.",
                genres: genreIds.electro,  // Utilisation de l'ObjectId du genre Electro
                image: '/images/artistes/daft-punk.jpg',
            }

        ];

        const insertedArtists = await Artist.insertMany(artists);
        console.log('Artists inserted successfully!');

        const artistIds = {
            gojira: insertedArtists.find(artist => artist.name === 'Gojira')._id,
            billie: insertedArtists.find(artist => artist.name === 'Billie Eilish')._id,
            guetta: insertedArtists.find(artist => artist.name === 'David Guetta')._id,
            gizzard: insertedArtists.find(artist => artist.name === 'King Gizzard & the Lizard Wizard')._id,
            Stromaé: insertedArtists.find(artist => artist.name === 'Stromaé')._id,
            Angele: insertedArtists.find(artist => artist.name === 'Angèle')._id,
            Louane: insertedArtists.find(artist => artist.name === 'Louane')._id,
            Vianney: insertedArtists.find(artist => artist.name === 'Vianney')._id,
            JulienDore: insertedArtists.find(artist => artist.name === 'Julien Doré')._id,
            AyaNakamura: insertedArtists.find(artist => artist.name === 'Aya Nakamura')._id,
            Slimane: insertedArtists.find(artist => artist.name === 'Slimane')._id,
            Dadju: insertedArtists.find(artist => artist.name === 'Dadju')._id,
            EddyDePretto: insertedArtists.find(artist => artist.name === 'Eddy de Pretto')._id,
            Madeon: insertedArtists.find(artist => artist.name === 'Madeon')._id,
            Vitalic: insertedArtists.find(artist => artist.name === 'Vitalic')._id,
            Merkaat: insertedArtists.find(artist => artist.name === 'Merkaat')._id,
            PetitBiscuit: insertedArtists.find(artist => artist.name === 'Petit Biscuit')._id,
            DaftPunk: insertedArtists.find(artist => artist.name === 'Daft Punk')._id,
        };

        const events = [
            {
                name: 'Gojira Concert',
                description: 'Performance live de Gojira',
                startTime: '20:00',
                endTime: '22:00',
                day: insertedDays[0]._id,
                artist: artistIds.gojira,
                location: insertedVenues[0]._id,
            },
            {
                name: 'Billie Eilish Concert',
                description: 'Performance live de Billie Eilish',
                startTime: '18:00',
                endTime: '20:00',
                day: insertedDays[1]._id,
                artist: artistIds.billie,
                location: insertedVenues[1]._id,
            },
            {
                name: 'David Guetta DJ Set',
                description: 'DJ set par David Guetta',
                startTime: '22:00',
                endTime: '00:00',
                day: insertedDays[2]._id,
                artist: artistIds.guetta,
                location: insertedVenues[0]._id,
            },
            {
                name: 'King Gizzard & the Lizard Wizard Concert',
                description: 'Performance live de King Gizzard & the Lizard Wizard',
                startTime: '20:00',
                endTime: '22:00',
                day: insertedDays[2]._id,
                artist: artistIds.gizzard,
                location: insertedVenues[1]._id,
            },
            {
                name: 'Stromaé Concert',
                description: 'Performance live de Stromaé',
                startTime: '18:00',
                endTime: '20:00',
                day: insertedDays[2]._id,
                artist: artistIds.Stromaé,
                location: insertedVenues[1]._id,
            },
            {
                name: 'Angèle Concert',
                description: 'Performance live de Angèle',
                startTime: '20:00',
                endTime: '22:00',
                day: insertedDays[0]._id,
                artist: artistIds.Angele,
                location: insertedVenues[0]._id,
            },
            {
                name: 'Louane Concert',
                description: 'Performance live de Louane',
                startTime: '18:00',
                endTime: '20:00',
                day: insertedDays[1]._id,
                artist: artistIds.Louane,
                location: insertedVenues[1]._id,
            },
            {
                name: 'Vianney Concert',
                description: 'Performance live de Vianney',
                startTime: '20:00',
                endTime: '22:00',
                day: insertedDays[0]._id,
                artist: artistIds.Vianney,
                location: insertedVenues[2]._id,
            },
            {
                name: 'Les wrappettes',
                description: 'Les wrappettes sont là pour vous régaler avec leurs délicieuses crêpes façon wraps ! Venez déguster leurs créations originales et savoureuses dans une ambiance conviviale et chaleureuse.',
                startTime: '11:00',
                endTime: '16:00',
                day: insertedDays[0]._id,
                location: insertedVenues[2]._id,
            },
            {
                name: 'Julien Doré Concert',
                description: 'Performance live de Julien Doré',
                startTime: '18:00',
                endTime: '20:00',
                day: insertedDays[2]._id,
                artist: artistIds.JulienDore,
                location: insertedVenues[0]._id,
            },
            {
                name: 'Aya Nakamura Concert',
                description: 'Performance live de Aya Nakamura',
                startTime: '20:00',
                endTime: '22:00',
                day: insertedDays[2]._id,
                artist: artistIds.AyaNakamura,
                location: insertedVenues[1]._id,
            },
            {
                name: 'Slimane Concert',
                description: 'Performance live de Slimane',
                startTime: '18:00',
                endTime: '20:00',
                day: insertedDays[1]._id,
                artist: artistIds.Slimane,
                location: insertedVenues[2]._id,
            },
            {
                name: 'Dadju Concert',
                description: 'Performance live de Dadju',
                startTime: '20:00',
                endTime: '22:00',
                day: insertedDays[1]._id,
                artist: artistIds.Dadju,
                location: insertedVenues[0]._id,
            
            },
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