const {
    createArtist,
    getArtists,
    getArtistById,
    updateArtist,
    deleteArtist
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

exports.artistsList = async (req, res) => {
    try {
        const artists = await getArtists();
        res.json({ artists });
    } catch (e) {
        throw e;
    }
};

exports.artistDetails = async (req, res) => {
    try {
        const artistId = req.params.artistId;
        const artist = await getArtistById(artistId);
        res.json({ artist });
    } catch (e) {
        throw e;
    }
};

exports.editArtist = async (req, res) => {
    const artistId = req.params.artistId;
    try {
        const body = req.body;
        await updateArtist(artistId, body);
        res.status(201).json({ message: "Artist updated successfully" });
    } catch (e) {
        throw e;
    }
};

exports.removeArtist = async (req, res) => {
    const artistId = req.params.artistId;
    try {
        await deleteArtist(artistId);
        res.status(201).json({ message: "Artist deleted successfully" });
    } catch (e) {
        throw e;
    }
};