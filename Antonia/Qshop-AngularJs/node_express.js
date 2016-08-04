var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var product = require('./models/product.model');
var Review = require('./models/review.model');
var specification = require('./models/specification.model');
var app = express();

mongoose.connect('mongodb://localhost:27017/qshopdatabase');

app.listen(3000, function() {
    console.log('Express listening on port 3000');
})

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    product.find(function(err, products) {
        if (err)  throw err;
        res.send(products);
    })
})

app.post('/', function(req, res) {
    var rev = new review(req.body);
    rev.save(function(err, rev) {
        if (err)
            throw err;
        res.json(201, rev);
    });
});

app.post('/', function(req, res) {
    var spec = new specification({
        label: req.body.label,
        value: req.body.value
    });
    rev.save(function(err, spec) {
        if (err)
            throw err;
        res.json(201, spec);
    });
});

app.post('/', function(req, res) {
    var prod = new product({
        picture: req.body.picture,
        name: req.body.name,
        price: req.body.price,
        onSale: req.body.onSale,
        description: req.body.description,
        specifications: req.body.specifications,
        reviews: req.body.reviews,
        pictures: req.body.pictures

    });
    rev.save(function(err, prod) {
        if (err)
            throw err;
        res.json(201, prod);
    });
});

app.put('/:id', function(req, res) {
    var id = req.params.id;
    Review.findByIdAndUpdate(id, {
        name: "bla"
    }, function(err) {

        if (!err) {
            res.json(200, {
                message: "rev updated: "
            });
        } else {
            res.json(500, {
                message: "Could not update rev. " + err
            })
        }
    });
});

app.delete('/:id', function(req, res) {

    var id = req.params.id;
    Review.findByIdAndRemove(id, function(err) {
        if (!err) {

            res.json(200, {
                message: "rev removed."
            });

        } else {
            res.json(403, {
                message: "Could not delete rev. " + err
            });
        }
    });
});
