var express = require("express");
var router = express.Router();
var request = require("request");

router.get("/", function (req, res) {
    request('http://words.bighugelabs.com/api/2/ad221494e1dc2b182c8a19d90aa0961a/word/json', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        res.send(body);
    });
})

module.exports = router;