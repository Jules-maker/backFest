const mongoose = require('mongoose');
const schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *   schemas:
 *     Day:
 *       type: object
 *       required:
 *         - date
 *       properties:
 *         date:
 *           type: string
 *           format: date
 *           description: The date of the day
 *       example:
 *         date: 2023-10-01
 */
const daySchema = schema({
        date: {
            type: Date,
            required: true,
            unique: true
        }
    },
    {timestamps: true}
);

const Day = mongoose.model('day', daySchema);

module.exports = Day;
