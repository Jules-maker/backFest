const {
    createGenre,
    getGenres,
    getGenreById,
    updateGenre,
    deleteGenre
} = require("../queries/genres.queries");

exports.addGenre = async (req, res) => {
    try {
        const body = req.body;
        await createGenre(body);
        res.status(201).json({ message: "Genre created successfully" });
    } catch (e) {
        throw e;
    }
};

exports.genresList = async (req, res) => {
    try {
        const genres = await getGenres();
        res.json({ genres });
    } catch (e) {
        throw e;
    }
};

exports.genreDetails = async (req, res) => {
    try {
        const genreId = req.params.genreId;
        const genre = await getGenreById(genreId);
        res.json({ genre });
    } catch (e) {
        throw e;
    }
};

exports.editGenre = async (req, res) => {
    const genreId = req.params.genreId;
    try {
        const body = req.body;
        await updateGenre(genreId, body);
        res.status(201).json({ message: "Genre updated successfully" });
    } catch (e) {
        throw e;
    }
};

exports.removeGenre = async (req, res) => {
    const genreId = req.params.genreId;
    try {
        await deleteGenre(genreId);
        res.status(201).json({ message: "Genre deleted successfully" });
    } catch (e) {
        throw e;
    }
};