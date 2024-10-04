const {
    addArtist,
} = require("../controllers/artists.controller");
const router = require("express").Router();

router.post("/", addArtist);

module.exports = router;