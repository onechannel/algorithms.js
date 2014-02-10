var Fib = require('../../algorithms/math/fibonacci'),
    assert = require('assert');

describe('Fibonacci', function() {
  describe('#exponential()', function() {
    it('should return the right value for fibonacci sequence', function(){
      assert.equal(0, Fib.exponential(0));
      assert.equal(1, Fib.exponential(1));
      assert.equal(1, Fib.exponential(2));
      assert.equal(2, Fib.exponential(3));
      assert.equal(3, Fib.exponential(4));
      assert.equal(5, Fib.exponential(5));
      assert.equal(8, Fib.exponential(6));
      assert.equal(13, Fib.exponential(7));
      assert.equal(21, Fib.exponential(8));
      assert.equal(34, Fib.exponential(9));
      assert.equal(55, Fib.exponential(10));
      assert.equal(89, Fib.exponential(11));
      assert.equal(144, Fib.exponential(12));
    });
  });

  describe('#linear()', function() {
    it('should return the right value for fibonacci sequence', function(){
      assert.equal(0, Fib.linear(0));
      assert.equal(1, Fib.linear(1));
      assert.equal(1, Fib.linear(2));
      assert.equal(2, Fib.linear(3));
      assert.equal(3, Fib.linear(4));
      assert.equal(5, Fib.linear(5));
      assert.equal(8, Fib.linear(6));
      assert.equal(13, Fib.linear(7));
      assert.equal(21, Fib.linear(8));
      assert.equal(34, Fib.linear(9));
      assert.equal(55, Fib.linear(10));
      assert.equal(89, Fib.linear(11));
      assert.equal(144, Fib.linear(12));
    });
  });

  describe('#withMemoization()', function() {
    it('should return the right value for fibonacci sequence', function(){
      assert.equal(0, Fib.withMemoization(0));
      assert.equal(1, Fib.withMemoization(1));
      assert.equal(1, Fib.withMemoization(2));
      assert.equal(2, Fib.withMemoization(3));
      assert.equal(3, Fib.withMemoization(4));
      assert.equal(5, Fib.withMemoization(5));
      assert.equal(8, Fib.withMemoization(6));
      assert.equal(13, Fib.withMemoization(7));
      assert.equal(21, Fib.withMemoization(8));
      assert.equal(34, Fib.withMemoization(9));
      assert.equal(55, Fib.withMemoization(10));
      assert.equal(89, Fib.withMemoization(11));
      assert.equal(144, Fib.withMemoization(12));
    });
  });
});

