const {
    addEvent,
    eventsList,
    eventDetails,
    editEvent,
    removeEvent,
} = require("../controllers/events.controller");
const router = require("express").Router();

router.post("/", addEvent);
router.get("/", eventsList);
router.get("/:eventId", eventDetails);
router.post("/:eventId", editEvent);
router.delete("/:eventId", removeEvent);

module.exports = router;