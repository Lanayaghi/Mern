const mongoose = require ("mongoose");

const schema = mongoose.Schema;

const JokesSchema = new mongoose.Schema({
    setup :{
        type : String,
        required: [true, "You need to set up your joke!"],
        minlength : [10, "Your joke is too short!"]
    },

    punchline : {
        type : String,
        required : [true, "...So whats the joke!"],
        minlength: [3, "Mybe try that again"]
    }
})

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;