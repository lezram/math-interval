import {Interval} from "../src/";

describe("IntervalMatchTest", () => {

    test.each([
        [2, 2, true, true],
        [5, 5, true, true],
        [1, 3, true, true],
        [1, 2, true, true],
        [1, 2, true, false],
        [1, 2, false, false],
        [3, 4, true, true],
        [3, 4, false, false],
        [3, 4, true, false],
        [3, 4, false, true],
        [5, 6, false, true],
        [5, 6, true, false],
        [5, 6, true, true],
        [5, 6, false, false],
        [0, 10, false, false],
        [-1, 8, false, false],
        [-Infinity, Infinity, false, false],
    ])("testIsOverlappingOverlaps (%d, %d, %s, %s)", (start: number, end: number, includeStart: boolean, includeEnd: boolean) => {
        let interval = new Interval(start, end, includeStart, includeEnd);
        let interval1 = new Interval(2, 5, true, true);

        const isOverlapping = interval1.isOverlapping(interval);

        expect(isOverlapping).toBeTruthy();
    });

    test.each([
        [1, 1, false, false], // Empty Interval
        [1, 2, true, false],
        [5, 6, false, true],
        [1, 1, true, true],
        [6, 8, true, true],
        [-Infinity, 0, true, true],
    ])("testIsOverlappingNoOverlap (%d, %d, %s, %s)", (start: number, end: number, includeStart: boolean, includeEnd: boolean) => {
        let interval = new Interval(start, end, includeStart, includeEnd);
        let interval1 = new Interval(2, 5, false, false);

        const isOverlapping = interval1.isOverlapping(interval);

        expect(isOverlapping).toBeFalsy();
    });

    test.each([
        2,
        3,
        4,
        5,
        new Interval(2, 3, true, true),
        new Interval(3, 4, true, true),
        new Interval(4, 5, true, true),
    ])("testContains(%o)", (value: number | Interval) => {
        let interval = new Interval(2, 5, true, true);

        const contains = interval.contains(value);

        expect(contains).toBeTruthy();
    });

    test.each([
        null,
        "23",
        1,
        2,
        5,
        6,
        new Interval(null, null, null, null),
        new Interval(1, 2, true, true),
        new Interval(1, 3, true, true),
        new Interval(4, 7, true, true),
        new Interval(5, 7, true, true),
    ])("testContainsNoMatch(%o)", (value: number | Interval) => {
        let interval = new Interval(2, 5, false, false);

        const contains = interval.contains(value);

        expect(contains).toBeFalsy();
    });


});

