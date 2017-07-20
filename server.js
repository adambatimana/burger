let express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");

const app = express();
const PORT= 8000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controllers.js")(app);

app.listen(PORT, function() {
  console.log("APP listening on PORT " + PORT);
})
