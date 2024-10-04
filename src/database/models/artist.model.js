const mongoose = require('mongoose');
const schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *   schemas:
 *     Artist:
 *       type: object
 *       required:
 *         - name
 *         - bio
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the artist
 *         bio:
 *           type: string
 *           description: The biography of the artist
 *         genres:
 *           type: array
 *           items:
 *             type: string
 *             description: The genre IDs associated with the artist
 *         image:
 *           type: string
 *           description: The URL of the artist's image
 *         socialMedia:
 *           type: object
 *           properties:
 *             instagram:
 *               type: string
 *               description: The Instagram handle of the artist
 *             twitter:
 *               type: string
 *               description: The Twitter handle of the artist
 *         spotify:
 *           type: string
 *           description: The Spotify URL of the artist
 *       example:
 *         name: John Doe
 *         bio: A popular artist known for his unique style.
 *         genres: [60c72b2f9b1d4c3a4c8e4b2d]
 *         image: images/artistes/example.jpg
 *         socialMedia:
 *           instagram: johndoe
 *           twitter: johndoe
 *         spotify: http://spotify.com/johndoe
 */
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
    },
    {timestamps: true}
);

const Artist = mongoose.model('artist', artistSchema);

module.exports = Artist;
