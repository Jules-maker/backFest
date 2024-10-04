const {
    addEvent,
    eventsList,
    eventDetails,
    editEvent,
    removeEvent,
} = require("../controllers/events.controller");
const router = require("express").Router();

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Add a new event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       201:
 *         description: The event was successfully created
 *       500:
 *         description: Some server error
 */
router.post("/", addEvent);

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Returns a list of events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: The list of events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 */
router.get("/", eventsList);

/**
 * @swagger
 * /events/{eventId}:
 *   get:
 *     summary: Get the event by id
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: eventId
 *         schema:
 *           type: string
 *         required: true
 *         description: The event id
 *     responses:
 *       200:
 *         description: The event description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: The event was not found
 */
router.get("/:eventId", eventDetails);

/**
 * @swagger
 * /events/{eventId}:
 *   post:
 *     summary: Update the event by the id
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: eventId
 *         schema:
 *           type: string
 *         required: true
 *         description: The event id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Event'
 *     responses:
 *       200:
 *         description: The event was updated
 *       404:
 *         description: The event was not found
 *       500:
 *         description: Some error happened
 */
router.post("/:eventId", editEvent);

/**
 * @swagger
 * /events/{eventId}:
 *   delete:
 *     summary: Remove the event by id
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: eventId
 *         schema:
 *           type: string
 *         required: true
 *         description: The event id
 *     responses:
 *       200:
 *         description: The event was deleted
 *       404:
 *         description: The event was not found
 *       500:
 *         description: Some error happened
 */
router.delete("/:eventId", removeEvent);

module.exports = router;