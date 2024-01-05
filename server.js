var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', (req, res)=>{res.send("Welcome to the world of Chocolates ");});
app.listen(1300);
console.log("App is Listening on Port 1300");