const Artist = require("../database/models/artist.model");

exports.createArtist = async (body) => {
    try {
        const artist = new Artist({
            name: body.name,
            bio: body.bio,
            genres: body.genres,
            image: body.image,
            socialMedia: body.socialMedia,
            spotify: body.spotify,
        });
        return artist.save();
    } catch (e) {
        throw e;
    }
};