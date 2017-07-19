let express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
const PORT= 8000;

require("./controllers/burgers_controllers.js")(app);

app.listen(PORT, function() {
  console.log("APP listening on PORT " + PORT);
})
