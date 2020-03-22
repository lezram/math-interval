![Build](https://github.com/lezram/math-interval/workflows/Build/badge.svg)

[![NPM](https://nodei.co/npm/@lezram/math-interval.png)](https://nodei.co/npm/@lezram/math-interval/)

# @lezram/math-interval
A very simple interval library

## Installation

### node
```
npm i @lezram/math-interval --save
```

## Usage
### NodeJS
#### Javascript
```javascript
const Interval = require("@lezram/math-interval").Interval;
const timeInterval = new Interval(Date.UTC(2020, 0, 1), Date.UTC(2020, 0, 3), false, true);
```

#### Typescript
```javascript
import {Interval} from "@lezram/math-interval";
const timeInterval = new Interval(Date.UTC(2020, 0, 1), Date.UTC(2020, 0, 3), false, true);
```

#### Browser
```html
<script src="math-interval.js"></script>
<script>
const Interval = MathInterval.Interval;
const timeInterval = new Interval(Date.UTC(2020, 0, 1), Date.UTC(2020, 0, 3), false, true);
console.log(timeInterval);
</script>
```

## API

* `new Interval(start: number, end: number, includeStart: boolean, includeEnd: boolean)` \
    Create an interval object
    ```typescript
      new Interval(1, 2, true, false);
    ```
* `Interval.from(intervalNotation: string): Interval` \
    Create an interval object from mathematical interval notation
    ```typescript
      Interval.from("[1,2]");
    ```
* `Interval.sort(interval1, interval2, ...): Interval[]` \
    Sort intervals with following order: empty, lowest start, lowest end
* `Interval.union(interval1, interval2, ...): Interval[]` \
    Union elements and sort
    ```typescript
    const interval1 = new Interval(1, 2, true, true);
    const interval2 = new Interval(2, 4, false, false);
  
    const union = Interval.union(interval1, interval2);
    // union = new Interval(1, 4, true, false);
    ```
* `obj.isOverlapping(interval: Interval): boolean` \
    Checks if passed interval overlaps/intersect
* `obj.contains(numberOrInterval: number | Interval): boolean` \
    Contains passed number or interval completely
* `obj.isEmpty(): boolean` \
    If is an empty interval `{}`, `[2,1]`, `(1,1)`, `(1,1]`, `[1,1)`
* `obj.copy(): Interval` \
    Copy interval
* `obj.isEqual(interval: Interval): boolean` \
    Check if interval is equal
