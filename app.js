// creating a app for nodejs

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

// this is to create function from express which handles a lot of login
const app = express();
app.use(bodyParser.urlencoded({extended: false})); // it registers a middleware

app.use('/add-product', (req, res,next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title">Add Product</form>')
}); // allows to add middleware function

app.post('/product', (req, res,next) => { //.get fires only GET requests
    res.redirect('/')
});

app.use('/', (req, res,next) => {
    res.send('<h1>Hello Express</h1>')
});

//app is created once
const server = http.createServer(app); // creates a server

// in production, it takes default port of the app :80
server.listen(3000);
