const {
    addArtist,
    artistsList,
    artistDetails,
    editArtist,
    removeArtist,
} = require("../controllers/artists.controller");
const router = require("express").Router();

/**
 * @swagger
 * /api/artists:
 *   post:
 *     summary: Add a new artist
 *     tags: [Artists]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Artist'
 *     responses:
 *       201:
 *         description: The artist was successfully created
 *       500:
 *         description: Some server error
 */
router.post("/", addArtist);

/**
 * @swagger
 * /api/artists:
 *   get:
 *     summary: Returns a list of artists
 *     tags: [Artists]
 *     responses:
 *       200:
 *         description: The list of artists
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Artist'
 */
router.get("/", artistsList);

/**
 * @swagger
 * /api/artists/{artistId}:
 *   get:
 *     summary: Get the artist by id
 *     tags: [Artists]
 *     parameters:
 *       - in: path
 *         name: artistId
 *         schema:
 *           type: string
 *         required: true
 *         description: The artist id
 *     responses:
 *       200:
 *         description: The artist description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Artist'
 *       404:
 *         description: The artist was not found
 */
router.get("/:artistId", artistDetails);

/**
 * @swagger
 * /api/artists/{artistId}:
 *   post:
 *     summary: Update the artist by the id
 *     tags: [Artists]
 *     parameters:
 *       - in: path
 *         name: artistId
 *         schema:
 *           type: string
 *         required: true
 *         description: The artist id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Artist'
 *     responses:
 *       200:
 *         description: The artist was updated
 *       404:
 *         description: The artist was not found
 *       500:
 *         description: Some error happened
 */
router.post("/:artistId", editArtist);

/**
 * @swagger
 * /api/artists/{artistId}:
 *   delete:
 *     summary: Remove the artist by id
 *     tags: [Artists]
 *     parameters:
 *       - in: path
 *         name: artistId
 *         schema:
 *           type: string
 *         required: true
 *         description: The artist id
 *     responses:
 *       200:
 *         description: The artist was deleted
 *       404:
 *         description: The artist was not found
 *       500:
 *         description: Some error happened
 */
router.delete("/:artistId", removeArtist);

module.exports = router;