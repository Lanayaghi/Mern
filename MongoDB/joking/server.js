const express = require ("express");
const app = express();
const port = 8000;
const cors = require ("cors");

app.use(cors());

app.use(express.json(), express.urlencoded({extended: true}));

require("./server/config/mongoose.config");
require("./server/routers/joke.routes")(app);

app.listen(port, () => console.log('its time to Mern on port 8000!'));