karma-chai-ie8
==========

[Chai](https://github.com/chaijs/chai) for [Karma](http://karma-runner.github.io)
with partial support for IE8 (assert interface) using
[Assertive Chai](https://github.com/jokeyrhyme/assertive-chai.js).

[![NPM version](https://badge.fury.io/js/karma-chai-ie8.png)](http://badge.fury.io/js/karma-chai-ie8)

(based on https://github.com/xdissent/karma-chai)

Installation
------------

Install the plugin from npm:

```sh
$ npm install karma-chai-ie8 --save-dev
```

Or from Github:

```sh
$ npm install 'git+https://github.com/4lejandrito/karma-chai-ie8.git' --save-dev
```

Add `chai-ie8` to the `frameworks` key in your Karma configuration:

```coffee
module.exports = (config) ->
  config.set

    # frameworks to use
    frameworks: ['mocha', 'chai-ie8']

    # ...
```


Usage
-----

The assert suites is available in the tests:

```coffee
describe 'karma tests with chai', ->

  it 'should expose the Chai assert method', ->
    assert.ok('everything', 'everything is ok');
```

License
-------

The MIT License (MIT)
