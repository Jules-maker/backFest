const mongoose = require('mongoose');
const schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - startTime
 *         - endTime
 *         - day
 *         - artist
 *         - location
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the event
 *         description:
 *           type: string
 *           description: The description of the event
 *         startTime:
 *           type: string
 *           description: The start time of the event
 *         endTime:
 *           type: string
 *           description: The end time of the event
 *         day:
 *           type: string
 *           description: The day of the event
 *         artist:
 *           type: string
 *           description: The artist performing at the event
 *         location:
 *           type: string
 *           description: The location of the event
 *       example:
 *         name: Gojira Concert
 *         description: Live performance by Gojira
 *         startTime: '20:00'
 *         endTime: '22:00'
 *         day: 60c72b2f9b1d4c3a4c8e4b2a
 *         artist: 60c72b2f9b1d4c3a4c8e4b2b
 *         location: 60c72b2f9b1d4c3a4c8e4b2c
 */
const eventSchema = schema({
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        startTime: {
            type: String,  // Format attendu : 'HH:mm'
            required: true,
        },
        endTime: {
            type: String,  // Format attendu : 'HH:mm'
            required: true,
        },
        day: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Day',
        }],
        artist: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artist',
        }],
        location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Venue',
            required: true,
        },
    },
    {timestamps: true}
);

const Event = mongoose.model("event", eventSchema);

module.exports = Event;
