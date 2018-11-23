const assert = require('chai').assert
const Sorter = require('../lib/sorter')

describe('sorter class', function(){
  it('should be a function', function(){
    assert.isFunction(Sorter);
  });

  it('should instantiate a sorter', function(){
    var sorter = new Sorter;
    assert.isObject(sorter);
  });

  it('should sort an array of numbers low to high', function(){
    var unsortedArray = [4,3,1,2,5];
    var sortedArray = [1,2,3,4,5];
    var sorter = new Sorter;
    assert.deepEqual(sorter.bubbleSort(unsortedArray), sortedArray);
  })
})
