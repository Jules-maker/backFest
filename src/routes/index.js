const artists = require("./artists.routes");
const venues = require("./venues.routes");
const router = require("express").Router();

router.use("/api/artists", artists);
router.use("/api/venues", venues);

module.exports = router;