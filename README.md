karma-assertive-chai
==========

[Assertive Chai](https://github.com/jokeyrhyme/assertive-chai.js) for [Karma](http://karma-runner.github.io)

[![NPM version](https://badge.fury.io/js/karma-assertive-chai.png)](http://badge.fury.io/js/karma-assertive-chai)

(based on https://github.com/xdissent/karma-chai)

Installation
------------

Install the plugin from npm:

```sh
$ npm install karma-assertive-chai --save-dev
```

Or from Github:

```sh
$ npm install 'git+https://github.com/4lejandrito/karma-assertive-chai.git' --save-dev
```

Add `assertive-chai` to the `frameworks` key in your Karma configuration:

```coffee
module.exports = (config) ->
  config.set

    # frameworks to use
    frameworks: ['mocha', 'assertive-chai']

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
