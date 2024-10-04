const Day = require("../database/models/day.model");

exports.createDay = async (body) => {
    try {
        const day = new Day({
            date: body.date,
        });
        return day.save();
    } catch (e) {
        throw e;
    }
};

exports.getDays = async () => {
    try {
        return Day.find({});
    } catch (e) {
        throw e;
    }
};

exports.getDayById = async (id) => {
    try {
        return Day.findOne({_id: id}).select("-__v");
    } catch (e) {
        throw e;
    }
};

exports.updateDay = async (dayId, body) => {
    return Day.findByIdAndUpdate(
        dayId,
        {
            $set: {
                date: body.date,
            },
        },
        {runValidators: true}
    );
};

exports.deleteDay = async (dayId) => {
    return Day.findByIdAndDelete(dayId);
};