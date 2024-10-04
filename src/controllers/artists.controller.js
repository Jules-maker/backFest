const {
    createArtist,
} = require("../queries/artists.queries");

exports.addArtist = async (req, res) => {
    try {
        const body = req.body;
            await createArtist(body);
            res.status(201).json({ message: "Artist created successfully" });
    } catch (e) {
        throw e;
    }
};