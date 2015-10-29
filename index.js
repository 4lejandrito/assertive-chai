var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files, browsers) {
  files.unshift(pattern(path.join(__dirname, 'adapter.js')));
  if (browsers.indexOf('ie8') !== -1) {
      files.unshift(pattern(path.resolve(require.resolve('assertive-chai'), '../dist/assertive-chai.js')));
  } else {
    files.unshift(pattern(path.resolve(require.resolve('chai'), '../chai.js')));
  }
};

framework.$inject = ['config.files', 'config.browsers'];
module.exports = {'framework:chai-ie8': ['factory', framework]};
