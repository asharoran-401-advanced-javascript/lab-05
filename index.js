'use strict';

const mongoose = require('mongoose');
const Categories = require('./models/categories-schema.js');
const Product = require('./models/products-shema.js')
const MONGOOSE_URI = 'mongodb://localhost:27017/lab-05';

mongoose.connect(MONGOOSE_URI , {useNewUrlParser : true});

const categorieType = new Categories({ name : 'building'})
const someProduct = new Product({ price : 12 , weight : 30 ,  quantity_in_stock: 15})

someProduct.save();
categorieType.save();