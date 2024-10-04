const {
    createDay,
    getDays,
    getDayById,
    updateDay,
    deleteDay
} = require("../queries/days.queries");

exports.addDay = async (req, res) => {
    try {
        const body = req.body;
        await createDay(body);
        res.status(201).json({ message: "Day created successfully" });
    } catch (e) {
        throw e;
    }
};

exports.daysList = async (req, res) => {
    try {
        const days = await getDays();
        res.json({ days });
    } catch (e) {
        throw e;
    }
};

exports.dayDetails = async (req, res) => {
    try {
        const dayId = req.params.dayId;
        const day = await getDayById(dayId);
        res.json({ day });
    } catch (e) {
        throw e;
    }
};

exports.editDay = async (req, res) => {
    const dayId = req.params.dayId;
    try {
        const body = req.body;
        await updateDay(dayId, body);
        res.status(201).json({ message: "Day updated successfully" });
    } catch (e) {
        throw e;
    }
};

exports.removeDay = async (req, res) => {
    const dayId = req.params.dayId;
    try {
        await deleteDay(dayId);
        res.status(201).json({ message: "Day deleted successfully" });
    } catch (e) {
        throw e;
    }
};