const {
    addGenre,
    genresList,
    genreDetails,
    editGenre,
    removeGenre,
} = require("../controllers/genres.controller");
const router = require("express").Router();

/**
 * @swagger
 * /api/genres:
 *   post:
 *     summary: Add a new genre
 *     tags: [Genres]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Genre'
 *     responses:
 *       201:
 *         description: The genre was successfully created
 *       500:
 *         description: Some server error
 */
router.post("/", addGenre);

/**
 * @swagger
 * /api/genres:
 *   get:
 *     summary: Returns a list of genres
 *     tags: [Genres]
 *     responses:
 *       200:
 *         description: The list of genres
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Genre'
 */
router.get("/", genresList);

/**
 * @swagger
 * /api/genres/{genreId}:
 *   get:
 *     summary: Get the genre by id
 *     tags: [Genres]
 *     parameters:
 *       - in: path
 *         name: genreId
 *         schema:
 *           type: string
 *         required: true
 *         description: The genre id
 *     responses:
 *       200:
 *         description: The genre description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genre'
 *       404:
 *         description: The genre was not found
 */
router.get("/:genreId", genreDetails);

/**
 * @swagger
 * /api/genres/{genreId}:
 *   post:
 *     summary: Update the genre by the id
 *     tags: [Genres]
 *     parameters:
 *       - in: path
 *         name: genreId
 *         schema:
 *           type: string
 *         required: true
 *         description: The genre id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Genre'
 *     responses:
 *       200:
 *         description: The genre was updated
 *       404:
 *         description: The genre was not found
 *       500:
 *         description: Some error happened
 */
router.post("/:genreId", editGenre);

/**
 * @swagger
 * /api/genres/{genreId}:
 *   delete:
 *     summary: Remove the genre by id
 *     tags: [Genres]
 *     parameters:
 *       - in: path
 *         name: genreId
 *         schema:
 *           type: string
 *         required: true
 *         description: The genre id
 *     responses:
 *       200:
 *         description: The genre was deleted
 *       404:
 *         description: The genre was not found
 *       500:
 *         description: Some error happened
 */
router.delete("/:genreId", removeGenre);

module.exports = router;