'use strict';

require('@code-fellows/supergoose');

const Product = require('../models/product-model.js');

const products = new Product();

describe(' Prodaucts Module' , () =>{

    it(' can post() a new products' , () =>{
      let obj = {
        price : 5,
        weight : 30,
        quantity_in_stock : 10,
      };
      return products.create(obj)
        .then( record =>{
          Object.keys(obj).forEach(key =>{
            expect(record[key]).toEqual(obj[key]);
          });
        });
    });
    it('can get() a new product' , () =>{
      let obj = {
        price : 5,
        weight : 30,
        quantity_in_stock : 10,
      };
      return products.create(obj)
        .then( record =>{
          return products.get(record._id)
            .then( product =>{
              Object.keys(obj).forEach( key =>{
                expect(product[key]).toEqual(obj[key]);
              });
            });
        });
    });
    it (' can update() a product ' , () =>{
      let obj = {
        price : 5,
        weight : 30,
        quantity_in_stock : 10,
      };
      return products.create(obj)
        .then( record =>{
          return products.update(record._id , obj)
            .then( product =>{
              Object.keys(obj).forEach( key =>{
                expect(product[key]).toEqual(obj[key]);
              });
            });
        });
    });
    it(' can delete() a product' , () =>{
      let obj = {
        price : 5,
        weight : 30,
        quantity_in_stock : 10,
      };
      return products.create(obj)
        .then( record =>{
          return products.delete(record._id);
        });
    });
  });