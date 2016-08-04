var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({

    picture: String,
    name: String,
    price: Number,
    onSale: Boolean,
    description: String,
    specifications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Specification'
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    pictures: [String]

});

var Product = mongoose.model('Product', productSchema);
module.exports = Product;
