const Event = require("../database/models/event.model");

exports.createEvent = async (body) => {
    try {
        const event = new Event({
            name: body.name,
            description: body.description,
            startTime: body.startTime,
            endTime: body.endTime,
            day: body.day,
            artist: body.artist,
            location: body.location,
        });
        return event.save();
    } catch (e) {
        throw e;
    }
};

exports.getEvents = async () => {
    try {
        return Event.find({});
    } catch (e) {
        throw e;
    }
};

exports.getEventById = async (id) => {
    try {
        return Event.findOne({_id: id}).select("-__v");
    } catch (e) {
        throw e;
    }
};

exports.updateEvent = async (eventId, body) => {
    return Event.findByIdAndUpdate(
        eventId,
        {
            $set: {
                name: body.name,
                description: body.description,
                startTime: body.startTime,
                endTime: body.endTime,
                day: body.day,
                artist: body.artist,
                location: body.location,
            },
        },
        {runValidators: true}
    );
};

exports.deleteEvent = async (eventId) => {
    return Event.findByIdAndDelete(eventId);
};