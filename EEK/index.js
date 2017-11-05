//index.js
var express = require('express');
var app = express();

app.get('/', (req, res)  => {
    res.sendfile('index.html');
});

//node.express framework

app.listen(3000);