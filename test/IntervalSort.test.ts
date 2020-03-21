import {Interval} from "../src/";

describe("IntervalSortTest", () => {

    const testee = Interval;

    test("testSort", () => {
        const interval1 = new Interval(3, 4, false, false);
        const interval2 = new Interval(1, 2, true, false);
        const interval3 = new Interval(7, 8, true, false);
        const interval4 = new Interval(6, 9, true, true);
        const interval5 = new Interval(2, 3, false, true);
        const interval6 = new Interval(-Infinity, -1, false, true);

        const result = testee.sort(interval1, interval2, interval3, interval4, interval5, interval6);

        expect(result).toEqual([
            new Interval(-Infinity, -1, false, true),
            new Interval(1, 2, true, false),
            new Interval(2, 3, false, true),
            new Interval(3, 4, false, false),
            new Interval(6, 9, true, true),
            new Interval(7, 8, true, false),
        ]);
    });

    test("testSortSameStart", () => {
        const interval1 = new Interval(1, 2, true, true);
        const interval2 = new Interval(1, 2, false, true);
        const interval3 = new Interval(1, 3, false, true);
        const interval4 = new Interval(1, 3, false, false);

        const result = testee.sort(interval1, interval2, interval3, interval4);

        expect(result).toEqual([
            new Interval(1, 2, true, true),
            new Interval(1, 2, false, true),
            new Interval(1, 3, false, false),
            new Interval(1, 3, false, true),
        ]);
    });

    test("testSortSameStartEnd", () => {
        const interval1 = new Interval(1, 3, false, false);
        const interval2 = new Interval(1, 3, true, false);
        const interval3 = new Interval(1, 3, true, true);
        const interval4 = new Interval(1, 3, false, false);
        const interval5 = new Interval(1, 3, false, true);
        const interval6 = new Interval(1, 2, true, true);

        const result = testee.sort(interval1, interval2, interval3, interval4, interval5, interval6);

        expect(result).toEqual([
            new Interval(1, 2, true, true),
            new Interval(1, 3, true, false),
            new Interval(1, 3, true, true),
            new Interval(1, 3, false, false),
            new Interval(1, 3, false, false),
            new Interval(1, 3, false, true),
        ]);
    });

    test("testSortSameStartEndReverse", () => {
        const interval6 = new Interval(1, 2, true, true);
        const interval5 = new Interval(1, 3, false, true);
        const interval4 = new Interval(1, 3, false, false);
        const interval3 = new Interval(1, 3, true, true);
        const interval2 = new Interval(1, 3, true, false);
        const interval1 = new Interval(1, 3, false, false);

        const result = testee.sort(interval1, interval2, interval3, interval4, interval5, interval6);

        expect(result).toEqual([
            new Interval(1, 2, true, true),
            new Interval(1, 3, true, false),
            new Interval(1, 3, true, true),
            new Interval(1, 3, false, false),
            new Interval(1, 3, false, false),
            new Interval(1, 3, false, true),
        ]);
    });
});

