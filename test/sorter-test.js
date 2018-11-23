const assert = require('chai').assert
const Sorter = require('../lib/sorter')

describe('sorter class', function(){
  context('bubble sorts', function(){
    it('should be a function', function(){
      assert.isFunction(Sorter);
    });

    it('can instantiate a sorter', function(){
      var sorter = new Sorter;
      assert.isObject(sorter);
    });

    it('can sort an array of numbers low to high', function(){
      var unsortedArray = [4,3,1,5,2];
      var sortedArray = [1,2,3,4,5];
      var sorter = new Sorter;
      assert.deepEqual(sorter.bubbleSortAsc(unsortedArray), sortedArray);
    })

    it('can sort an array of numbers high to low', function(){
      var unsortedArray = [4,3,1,5,2];
      var sortedArray = [5,4,3,2,1];
      var sorter = new Sorter;
      assert.deepEqual(sorter.bubbleSortDesc(unsortedArray), sortedArray);
    })

    it('can sort an array of numbers low to high including duplicates', function(){
      var unsortedArray = [4,4,1,5,2];
      var sortedArray = [1,2,4,4,5];
      var sorter = new Sorter;
      assert.deepEqual(sorter.bubbleSortAsc(unsortedArray), sortedArray);
    })
  })
})
