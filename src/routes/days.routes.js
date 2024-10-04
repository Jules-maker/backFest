const {
    addDay,
    daysList,
    dayDetails,
    editDay,
    removeDay,
} = require("../controllers/days.controller");
const router = require("express").Router();

/**
 * @swagger
 * /api/days:
 *   post:
 *     summary: Add a new day
 *     tags: [Days]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Day'
 *     responses:
 *       201:
 *         description: The day was successfully created
 *       500:
 *         description: Some server error
 */
router.post("/", addDay);

/**
 * @swagger
 * /api/days:
 *   get:
 *     summary: Returns a list of days
 *     tags: [Days]
 *     responses:
 *       200:
 *         description: The list of days
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Day'
 */
router.get("/", daysList);

/**
 * @swagger
 * /api/days/{dayId}:
 *   get:
 *     summary: Get the day by id
 *     tags: [Days]
 *     parameters:
 *       - in: path
 *         name: dayId
 *         schema:
 *           type: string
 *         required: true
 *         description: The day id
 *     responses:
 *       200:
 *         description: The day description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Day'
 *       404:
 *         description: The day was not found
 */
router.get("/:dayId", dayDetails);

/**
 * @swagger
 * /api/days/{dayId}:
 *   post:
 *     summary: Update the day by the id
 *     tags: [Days]
 *     parameters:
 *       - in: path
 *         name: dayId
 *         schema:
 *           type: string
 *         required: true
 *         description: The day id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Day'
 *     responses:
 *       200:
 *         description: The day was updated
 *       404:
 *         description: The day was not found
 *       500:
 *         description: Some error happened
 */
router.post("/:dayId", editDay);

/**
 * @swagger
 * /api/days/{dayId}:
 *   delete:
 *     summary: Remove the day by id
 *     tags: [Days]
 *     parameters:
 *       - in: path
 *         name: dayId
 *         schema:
 *           type: string
 *         required: true
 *         description: The day id
 *     responses:
 *       200:
 *         description: The day was deleted
 *       404:
 *         description: The day was not found
 *       500:
 *         description: Some error happened
 */
router.delete("/:dayId", removeDay);

module.exports = router;