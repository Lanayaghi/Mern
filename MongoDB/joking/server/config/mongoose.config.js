const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/jokes_api_db", {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

.then(() => console.log("found the mongoose!"))
.catch (() => console.log("where did the mongoose go?!", err))