const {
    addVenue,
    venuesList,
    venueDetails,
    editVenue,
    removeVenue,
} = require("../controllers/venues.controller");
const router = require("express").Router();

/**
 * @swagger
 * /api/venues:
 *   post:
 *     summary: Add a new venue
 *     tags: [Venues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venue'
 *     responses:
 *       201:
 *         description: The venue was successfully created
 *       500:
 *         description: Some server error
 */
router.post("/", addVenue);

/**
 * @swagger
 * /api/venues:
 *   get:
 *     summary: Returns a list of venues
 *     tags: [Venues]
 *     responses:
 *       200:
 *         description: The list of venues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Venue'
 */
router.get("/", venuesList);

/**
 * @swagger
 * /api/venues/{venueId}:
 *   get:
 *     summary: Get the venue by id
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: venueId
 *         schema:
 *           type: string
 *         required: true
 *         description: The venue id
 *     responses:
 *       200:
 *         description: The venue description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venue'
 *       404:
 *         description: The venue was not found
 */
router.get("/:venueId", venueDetails);

/**
 * @swagger
 * /api/venues/{venueId}:
 *   post:
 *     summary: Update the venue by the id
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: venueId
 *         schema:
 *           type: string
 *         required: true
 *         description: The venue id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venue'
 *     responses:
 *       200:
 *         description: The venue was updated
 *       404:
 *         description: The venue was not found
 *       500:
 *         description: Some error happened
 */
router.post("/:venueId", editVenue);

/**
 * @swagger
 * /api/venues/{venueId}:
 *   delete:
 *     summary: Remove the venue by id
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: venueId
 *         schema:
 *           type: string
 *         required: true
 *         description: The venue id
 *     responses:
 *       200:
 *         description: The venue was deleted
 *       404:
 *         description: The venue was not found
 *       500:
 *         description: Some error happened
 */
router.delete("/:venueId", removeVenue);

module.exports = router;