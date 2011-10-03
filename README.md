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

__view the test/ directory of this project for more examples__

## license
Copyright (C) 2011 by Brian M. Carlson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
