const assert = require('chai').assert
const BubbleSort = require('../lib/bubbleSort')

describe('bubble sort class', function(){
  it('should be a function', function(){
    assert.isFunction(BubbleSort);
  });

  it('should instantiate a bubble sort', function(){
    var bubble = new BubbleSort;
    assert.isObject(bubble);
  })
})
