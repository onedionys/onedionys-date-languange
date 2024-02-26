const assert = require('assert');
const { formatDateLanguange } = require('../src/index');

describe('Date Formatting', function() {
  describe('#formatDateLanguange()', function() {
    it('should return date in English format in full mode', function() {
      const date = '2024-02-25';
      assert.strictEqual(formatDateLanguange(date, 'en'), '25 February 2024');
    });
    it('should return date in English format in short mode', function() {
      const date = '2024-02-25';
      assert.strictEqual(formatDateLanguange(date, 'en', true), '25 Feb 2024');
    });
    it('should return date in Indonesian format in full mode', function() {
      const date = '2024-02-25';
      assert.strictEqual(formatDateLanguange(date, 'id'), '25 Februari 2024');
    });
    it('should return date in Indonesian format in short mode', function() {
      const date = '2024-02-25';
      assert.strictEqual(formatDateLanguange(date, 'id', true), '25 Feb 2024');
    });
  });
});
