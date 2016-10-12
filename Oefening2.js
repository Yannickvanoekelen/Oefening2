/**
 * Created by yannickvanoekelen on 12/10/16.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.listen(4567);

var  books = [];
books.push({id:1, name:"Beginning Node Js", rating:4});
books.push({id:2, name:"Knoeien met data-distributie", rating:3});


app.get("/books", function(request, response) {
    response.send({name:"Beginning Node JS", rating:4})
});


app.post("/books", function(request, response) {
    response.status(204).send();
});

console.log("woow, dees werkt!");
