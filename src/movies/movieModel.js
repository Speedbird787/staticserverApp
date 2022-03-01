const mongoose = require ("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
        unique: true,
    },
    actors: [
        {
            type:string,
        },

    ],

});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;