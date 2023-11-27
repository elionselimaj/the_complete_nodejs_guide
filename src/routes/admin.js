const express = require('express');

const router = express.Router(); // mini express app which we can export

router.get('/add-product', (req, res,next) => {
    res.send('<form action="/product" method="POST"> <input type="text" name="title"> <button type="submit">Add Product</button></form>')
}); // allows to add middleware function

router.post('/product', (req, res,next) => { //.get fires only GET requests
    res.redirect('/')
});

module.exports = router;
