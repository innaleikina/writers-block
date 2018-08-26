const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

var PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, 'build')));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//import routes from burgers_controller
var routes = require("./controller/words_controller.js");

app.use(routes);


app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });