# test-dir

Require directories full of files for testing.

## reasoning

I haven't found a test framework -- nodeunit, vows, expresso -- to fit my needs.  I like test libraries -- assert, should, tobi.  I want each test file to be a self-contained, 'runnable' test suite.  I used to use GNU Make for this, but it's not installed by default on windows.

#### Given:

```
/project-dir
  /test
    some-tests.js
    some-other-tests.js
  /lib
    ...
```

#### I want these options:

```
~/project-dir $ node test/some-tests.js
~/project-dir $ node test/some-other-tests.js
~/project-dir $ node test
```

#### Solution:

```
~/project-dir $ npm install test-dir
~/project-dir $ echo "require('test-dir')" > test/index.js
```

__view the test/ directory of this project for more examples___

## license
[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)
