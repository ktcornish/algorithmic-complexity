
/**
 * Expose `now`.
 */

module.exports = typeof Date.now === 'function'
  ? function now() {
    return Date.now();
  }
  : function now() {
    return (new Date()).getTime();
  };
