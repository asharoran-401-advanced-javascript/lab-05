'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({
    category_id : { type : Number , require : true},
    price : { type: Number , require: true},
    weight : { type : Number , require: true},
    quantity_in_stock : { type : Number , require: true}

})

module.exports = mongoose.model('product' , product);
