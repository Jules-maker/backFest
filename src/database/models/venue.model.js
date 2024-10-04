const mongoose = require('mongoose');
const schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *   schemas:
 *     Venue:
 *       type: object
 *       required:
 *         - name
 *         - location
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the venue
 *         location:
 *           type: object
 *           properties:
 *             lat:
 *               type: number
 *               description: The latitude of the venue
 *             lng:
 *               type: number
 *               description: The longitude of the venue
 *       example:
 *         name: Madison Square Garden
 *         location:
 *           lat: 40.7505045
 *           lng: -73.9934387
 */
const venueSchema = schema({
        name: {
            type: String,
            required: true,
        },
        location: {
            lat: {
                type: Number,
                required: true,
            },
            lng: {
                type: Number,
                required: true,
            },
        },
    },
    {timestamps: true}
);

const Venue = mongoose.model('venue', venueSchema);

module.exports = Venue;
