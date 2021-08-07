const AuthorController = require('../controllers/author.controllers');
module.exports = function(app){

    app.get('/api', AuthorController.getAllAuthors) ;
    app.post('/api/new', AuthorController.creatAuthor);
    app.get ('/api/:id', AuthorController.getOneAutherById);
    app.put ('/api/edit/:id', AuthorController.updateAuthor);
    app.delete('/api/new/:id', AuthorController.deleteAuthor)


}
