const artists = require("./artists.routes");
const venues = require("./venues.routes");
const genres = require("./genres.routes");
const days = require("./days.routes");
const router = require("express").Router();

router.use("/api/artists", artists);
router.use("/api/venues", venues);
router.use("/api/genres", genres);
router.use("/api/days", days);

module.exports = router;