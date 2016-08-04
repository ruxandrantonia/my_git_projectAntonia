var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var specificationSchema = new Schema({
    label: String,
    value: String,
});



var Specification = mongoose.model('Specification', specificationSchema);

module.exports = Specification;
