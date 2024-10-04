const artists = require("./artists.routes");
const venues = require("./venues.routes");
const genres = require("./genres.routes");
const days = require("./days.routes");
const events = require("./events.routes");
const router = require("express").Router();

router.use("/api/artists", artists);
router.use("/api/venues", venues);
router.use("/api/genres", genres);
router.use("/api/days", days);
router.use("/api/events", events);

module.exports = router;