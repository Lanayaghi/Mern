const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required : [
            true, 
            "Author Name is requires"
        ],
        minlength : [
            3, 
            "Author Name must be at least 3 characters long"
        ] 
    }
}, { timestamps: true });
module.exports.Author= mongoose.model('Author', AuthorSchema);
