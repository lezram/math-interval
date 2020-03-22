const assert = require("assert");
const Interval = require("../dist/node").Interval;

const result = new Interval(1, 2);

assert.equal(result.contains(1), true);
assert.deepEqual(result, {start: 1, end: 2, includeStart: true, includeEnd: true});
