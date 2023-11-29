// creating a app for nodejs

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./src/routes/admin');
const shopRoutes = require('./src/routes/shop');

// this is to create function from express which handles a lot of login
const app = express();
app.use(bodyParser.urlencoded({extended: false})); // it registers a middleware

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
}); // handling 404

//server is created once
const server = http.createServer(app); // creates a server

// in production, it takes default port of the app :80
server.listen(3000);
