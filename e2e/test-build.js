const assert = require("assert");
const IntervalModule = require("../dist/node");
const Interval = IntervalModule.Interval;

const result = new Interval(1, 2);
assert.deepEqual(result, {start: 1, end: 2, includeStart: true, includeEnd: true});
