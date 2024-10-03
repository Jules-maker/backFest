const {
    addVenue,
    venuesList,
    venueDetails,
    editVenue,
    removeVenue,
} = require("../controllers/venues.controller");
const router = require("express").Router();

router.post("/", addVenue);
router.get("/", venuesList);
router.get("/:venueId", venueDetails);
router.post("/:venueId", editVenue);
router.delete("/:venueId", removeVenue);

module.exports = router;