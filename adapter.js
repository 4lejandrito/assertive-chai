var should;

(function(window) {
  if (window.chai.should) window.should = window.chai.should();
  if (window.chai.expect) window.expect = window.chai.expect;
  if (window.chai.assert) window.assert = window.chai.assert;
})(window);
