'use strict';

const mongoose = require('mongoose');

const categorie = mongoose.Schema({
    name : { type : String, require: true}
})

module.exports = mongoose.model('categorie' , categorie)