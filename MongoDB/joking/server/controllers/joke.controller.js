const Joke = require ("../models/jokes.models");


//READ all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(alljokes => res.json({jokes: alljokes}))
    .catch(err => res.json({message:"You bombed your joke!", error:err}))
}

//READ one joke

module.exports.findOneJoke = (req, res) =>{
    Joke.findOne({_id: req.params._id})

    .then(OneJoke => res.json({joke: OneJoke}))
    .catch(err => res.json({message: "You bombed your joke", error:err}))
}

//CREATE a new joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => res.json ({joke: newJoke}))
    .catch(err => res.status(400).json(err));
}

//UPDATE an exisiting joke

module.exports.updateJoke = (req, res) => {
    Joke.update({_id: req.params._id}, {
        $set : {
            setup : req.body.setup,
            punchline : req.body.punchline
        }
    })

    .then( onejoke => res.json({joke: onejoke}))
    .catch( err => res.status(400).json(err))
}

//DELETE an existing joke

module.exports.deleteJoke = (req, res) => {
    Joke.remove({_id : req.params._id})
    .then(delJoke => res.json({message: "Deleted your NOT FUNNY joke"}))
    .catch (err =>res.json({message: "You bombed your joke", error:err}))
}
//READ an random joke

module.exports.findRandom = (req, res) => {
// get an array of jokes
//get a random index number from it
// pass the joke at that random  index number along
// catch => throw an error

Joke.find()
.then(jokes => {
    let rand = Math.floor(Math.random()*jokes.length);
    res.json({jokes: jokes[rand]});
})
.catch(err => res.json({message:'You bombed your joke', error: err}))
}
