const mongoose = require('mongoose');
const schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *   schemas:
 *     Genre:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the genre
 *       example:
 *         name: Rock
 */
const genreSchema = schema({
        name: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

const Genre = mongoose.model('genre', genreSchema);

module.exports = Genre;
