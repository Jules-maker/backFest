const {
    addGenre,
    genresList,
    genreDetails,
    editGenre,
    removeGenre,
} = require("../controllers/genres.controller");
const router = require("express").Router();

router.post("/", addGenre);
router.get("/", genresList);
router.get("/:genreId", genreDetails);
router.post("/:genreId", editGenre);
router.delete("/:genreId", removeGenre);

module.exports = router;