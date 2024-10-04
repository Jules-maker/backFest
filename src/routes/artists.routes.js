const {
    addArtist,
    artistsList,
    artistDetails,
    editArtist,
    removeArtist,
} = require("../controllers/artists.controller");
const router = require("express").Router();

router.post("/", addArtist);
router.get("/", artistsList);
router.get("/:artistId", artistDetails);
router.post("/:artistId", editArtist);
router.delete("/:artistId", removeArtist);

module.exports = router;