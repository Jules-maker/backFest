const Venue = require("../database/models/venue.model");

exports.createVenue = async (body) => {
    try {
        const venue = new Venue({
            name: body.name,
            location: {
                lat: body.lat,
                lng: body.lng,
            }
        });
        return venue.save();
    } catch (e) {
        throw e;
    }
};

exports.getVenues = async () => {
    try {
        return Venue.find({});
    } catch (e) {
        throw e;
    }
};

exports.getVenueById = async (id) => {
    try {
        return Venue.findOne({_id: id}).select("-__v");
    } catch (e) {
        throw e;
    }
};

exports.updateVenue = async (venueId, body) => {
    return Venue.findByIdAndUpdate(
        venueId,
        {
            $set: {
                name: body.name,
                "location.lat": body.lat,
                "location.lng": body.lng,
            },
        },
        {runValidators: true}
    );
};

exports.deleteVenue = async (venueId) => {
    return Venue.findByIdAndDelete(venueId);
};