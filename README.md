# interval
![build status](https://github.com/lezram/interval/workflows/release/badge.svg)

## Installation

### node
```
npm i math-interval
```

## Usage

* new Interval(start: number, end: number, includeStart: boolean, includeEnd: boolean)
    ```typescript
      new Interval(1, 2, true, false);
    ```
* Interval.union(interval1, interval2, ...)
    ```typescript
    const interval1 = new Interval(1, 2, true, true);
    const interval2 = new Interval(2, 4, false, false);
  
    const union = Interval.union(interval1, interval2);
  
    // union = new Interval(1, 4, true, false);
    ```
