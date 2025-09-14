const countVowels = require('../RGR.js');

test('count vowels in "hello"',()=>{
    expect(countVowels("hello")).toBe(2);
})



/*test output
RGR-vowelCount (main)
$ npm test

> vowel-count@1.0.0 test
> jest

 PASS  test/RGR.test.js
  √ count vowels in "hello" (5 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.8 s
Ran all test suites.*/