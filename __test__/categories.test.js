'use strict';

require('@code-fellows/supergoose');

const Categorie = require('../models/categorie-model.js');

const categorie = new Categorie();

describe('Categories Model', () => {
  
    it('can post() a new category', () => {
      let obj = { name: 'Test Category' };
      return categorie.create(obj)
        .then(record => {
          Object.keys(obj).forEach(key => {
            expect(record[key]).toEqual(obj[key]);
          });
        })
        .catch(e => console.error('ERR', e));
    });
  
    it('can get() a category', () => {
      let obj = { name: 'Test Category' };
      return categorie.create(obj)
        .then(record => {
          return categorie.get(record._id)
            .then(category => {
              Object.keys(obj).forEach(key => {
                expect(category[key]).toEqual(obj[key]);
              });
            });
        });
    });
    it('can update() a category' , () =>{
      let obj = { name : 'Test Category'};
      return categorie.create(obj)
        .then(record =>{
          return categorie.update(record._id , obj)
            .then(category =>{
              Object.keys(obj).forEach( key =>{
                expect(category[key]).toEqual(obj[key]);
              });
            });
        });
    });
    it(' can delete() a category' , () =>{
      let obj = { name : 'Test Category'};
      return categorie.create(obj)
        .then( record =>{
          return categorie.delete(record._id);
        });
    });
  
  });