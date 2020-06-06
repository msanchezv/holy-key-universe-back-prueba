const express = require("express");
const app = express();

app.get('/', function(req, res) {
    res.send('Welcome to Holy Key Universe');
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server on port 3000. continuous integration use Travis");
});