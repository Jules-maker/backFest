const Artist = require("../database/models/artist.model");

exports.createArtist = async (body) => {
    try {
        const artist = new Artist({
            name: body.name,
            bio: body.bio,
            genres: body.genres,
            image: body.image,
            socialMedia: {
                instagram: body.instagram,
                twitter: body.twitter,
            },
            spotify: body.spotify,
        });
        return artist.save();
    } catch (e) {
        throw e;
    }
};

exports.getArtists = async () => {
    try {
        return Artist.find({});
    } catch (e) {
        throw e;
    }
};

exports.getArtistById = async (id) => {
    try {
        return Artist.findOne({_id: id}).select("-__v");
    } catch (e) {
        throw e;
    }
};

exports.updateArtist = async (artistId, body) => {
    return Artist.findByIdAndUpdate(
        artistId,
        {
            $set: {
                name: body.name,
                bio: body.bio,
                genres: body.genres,
                image: body.image,
                socialMedia: {
                    instagram: body.instagram,
                    twitter: body.twitter,
                },
                spotify: body.spotify,
            },
        },
        {runValidators: true}
    );
};

exports.deleteArtist = async (artistId) => {
    return Artist.findByIdAndDelete(artistId);
};