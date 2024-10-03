const {
    createVenue,
    getVenues,
    getVenueById,
    updateVenue,
    deleteVenue
} = require("../queries/venues.queries");

exports.addVenue = async (req, res) => {
    try {
        const body = req.body;
        await createVenue(body);
        res.status(201).json({ message: "Venue created successfully" });
    } catch (e) {
        throw e;
    }
};

exports.venuesList = async (req, res) => {
    try {
        const venues = await getVenues();
        res.json({ venues });
    } catch (e) {
        throw e;
    }
};

exports.venueDetails = async (req, res) => {
    try {
        const venueId = req.params.venueId;
        const venue = await getVenueById(venueId);
        res.json({ venue });
    } catch (e) {
        throw e;
    }
};

exports.editVenue = async (req, res) => {
    const venueId = req.params.venueId;
    try {
        const body = req.body;
        await updateVenue(venueId, body);
        res.status(201).json({ message: "Venue updated successfully" });
    } catch (e) {
        throw e;
    }
};

exports.removeVenue = async (req, res) => {
    const venueId = req.params.venueId;
    try {
        await deleteVenue(venueId);
        res.status(201).json({ message: "Venue deleted successfully" });
    } catch (e) {
        throw e;
    }
};