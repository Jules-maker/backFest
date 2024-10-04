const {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent
} = require("../queries/events.queries");

exports.addEvent = async (req, res) => {
    try {
        const body = req.body;
        await createEvent(body);
        res.status(201).json({ message: "Event created successfully" });
    } catch (e) {
        throw e;
    }
};

exports.eventsList = async (req, res) => {
    try {
        const events = await getEvents();
        res.json({ events });
    } catch (e) {
        throw e;
    }
};

exports.eventDetails = async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const event = await getEventById(eventId);
        res.json({ event });
    } catch (e) {
        throw e;
    }
};

exports.editEvent = async (req, res) => {
    const eventId = req.params.eventId;
    try {
        const body = req.body;
        await updateEvent(eventId, body);
        res.status(201).json({ message: "Event updated successfully" });
    } catch (e) {
        throw e;
    }
};

exports.removeEvent = async (req, res) => {
    const eventId = req.params.eventId;
    try {
        await deleteEvent(eventId);
        res.status(201).json({ message: "Event deleted successfully" });
    } catch (e) {
        throw e;
    }
};