const PlayerController = require('../controllers/player.controller');
module.exports = function(app){

    app.post('/api/players/addplayer', PlayerController.creatPlayer);
    app.get('/api/players/list', PlayerController.getAllPlayers) ;
    app.get ('/api/players/list/:id', PlayerController.getOnePlayerById);
    app.delete('/api/players/list/:id', PlayerController.deletePlayer)


}