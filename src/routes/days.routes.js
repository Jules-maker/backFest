const {
    addDay,
    daysList,
    dayDetails,
    editDay,
    removeDay,
} = require("../controllers/days.controller");
const router = require("express").Router();

router.post("/", addDay);
router.get("/", daysList);
router.get("/:dayId", dayDetails);
router.post("/:dayId", editDay);
router.delete("/:dayId", removeDay);

module.exports = router;