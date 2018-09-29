const assert = require('assert');
import diff from "../utils/diff";

describe('jsonDiff', () => {
  describe('test number', () => {
    it('should return 1', () => {
      assert.deepEqual(diff(1, 2), { '': 1 })
    })
  })

  describe('test string', () => {
    it('should return "cur"', () => {
      assert.deepEqual(diff('cur', 'pre'), { '': 'cur' })
    })
  })

  describe('test boolean', () => {
    it('should return true', () => {
      assert.deepEqual(diff(true, false), { '': true })
    })
  })

  describe('test obj', () => {
    const cur = { a: 1 };
    const pre = { a: 2 };
    it('should return { a: 1 }', () => {
      assert.deepEqual(diff(cur, pre), { a: 1 })
    })
  })

  describe('test array', () => {
    const cur = [1];
    const pre = [2];
    it('should return [1]', () => {
      assert.deepEqual(diff(cur, pre), { '[0]': 1 })
    })
  })
})