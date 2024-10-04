const Genre = require("../database/models/genre.model");

exports.createGenre = async (body) => {
    try {
        const genre = new Genre({
            name: body.name,
        });
        return genre.save();
    } catch (e) {
        throw e;
    }
};

exports.getGenres = async () => {
    try {
        return Genre.find({});
    } catch (e) {
        throw e;
    }
};

exports.getGenreById = async (id) => {
    try {
        return Genre.findOne({_id: id}).select("-__v");
    } catch (e) {
        throw e;
    }
};

exports.updateGenre = async (genreId, body) => {
    return Genre.findByIdAndUpdate(
        genreId,
        {
            $set: {
                name: body.name,
            },
        },
        {runValidators: true}
    );
};

exports.deleteGenre = async (genreId) => {
    return Genre.findByIdAndDelete(genreId);
};