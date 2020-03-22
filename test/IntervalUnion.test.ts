import {Interval} from "../src/";

describe("IntervalUnionTest", () => {
    const testee = Interval;

    test("testUnion", () => {
        const interval1 = new Interval(1, 2);
        const interval2 = new Interval(2, 5);

        const result = testee.union(interval1, interval2);

        expect(result).toEqual([new Interval(1, 5, true, true)]);
    });

    test("testUnionNull", () => {
        const result = testee.union(null);

        expect(result).toEqual([]);
    });

    test("testUnionEmpty", () => {
        const result = testee.union();

        expect(result).toEqual([]);
    });

    test("testUnionEmptyInterval", () => {
        const interval = new Interval(2, 1);

        const result = testee.union(interval);

        expect(result).toEqual([]);
    });

    test("testUnionOneInterval", () => {
        const interval = new Interval(1, 2);

        const result = testee.union(interval);

        expect(result).toEqual([
            new Interval(1, 2, true, true)
        ]);
    });

    test("testUnionMultipleIntervals", () => {
        const interval1 = new Interval(3, 4, false, false);
        const interval2 = new Interval(1, 2, true, false);
        const interval3 = new Interval(7, 8, true, false);
        const interval4 = new Interval(6, 9, true, true);
        const interval5 = new Interval(2, 3, false, true);
        const interval6 = new Interval(-Infinity, -1, false, true);

        const result = testee.union(interval1, interval2, interval3, interval4, interval5, interval6);

        expect(result).toEqual([
            new Interval(-Infinity, -1, false, true),
            new Interval(1, 2, true, false),
            new Interval(2, 4, false, false),
            new Interval(6, 9, true, true)
        ]);
    });

    test("testUnionDegeneratedIntervals", () => {
        const interval1 = new Interval(1, 1, true, true);
        const interval2 = new Interval(1, 2, false, false);
        const interval3 = new Interval(2, 2, true, true);

        const result = testee.union(interval1, interval2, interval3);

        expect(result).toEqual([
            new Interval(1, 2, true, true)
        ]);
    });

    test("testUnionSameEnd", () => {
        const interval1 = new Interval(1, 3, true, true);
        const interval2 = new Interval(2, 3, false, false);

        const result = testee.union(interval1, interval2);

        expect(result).toEqual([
            new Interval(1, 3, true, true)
        ]);
    });


});

