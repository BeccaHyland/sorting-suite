const assert = require('chai').assert
const BubbleSort = require('../lib/bubbleSort')

describe('bubble sort class', function(){
  it('should be a function', function(){
    assert.isFunction(BubbleSort);
  });

  it('should instantiate a bubble sort', function(){
    var bubble = new BubbleSort;
    assert.isObject(bubble);
  });

  it('should have an unsorted array', function(){
    var ua = [3,1,2];
    var bubble = new BubbleSort(ua);
    assert.equal(bubble.uA, ua);
  })

  it('should sort an array of numbers low to high', function(){
    var unsortedArray = [4,3,1,2,5];
    var sortedArray = [1,2,3,4,5];
    var bubble = new BubbleSort(unsortedArray);
    assert.deepEqual(bubble.sortArray(), sortedArray);
  })
})
