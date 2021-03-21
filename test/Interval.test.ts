import {Interval} from "../src";
import {IntervalMock} from "./mock/IntervalMock";

describe("IntervalTest", () => {
    const RANDOM_VALUE = "some_value";

    test("testCopy", () => {
        let interval = new IntervalMock(1, 2, false, false);
        const copyInterval = interval.copy();
        interval.test = RANDOM_VALUE;

        expect(interval).toEqual({
            start: 1,
            end: 2,
            includeStart: false,
            includeEnd: false,
            test: RANDOM_VALUE
        });
        expect(copyInterval.isEmpty()).toBeFalsy();
        expect(copyInterval).toEqual({
            start: 1,
            end: 2,
            includeStart: false,
            includeEnd: false,
            test: null
        });
    });

    test("testIsEqual", () => {
        let interval1 = new Interval(1, 1);
        let interval2 = new Interval(1, 1);

        const result = interval1.isEqual(interval2)

        expect(result).toBeTruthy();
    });

    test("testIsEqualNotEqual", () => {
        let interval1 = new Interval(1, 1);
        let interval2 = new Interval(1, 2);

        const result = interval1.isEqual(interval2)

        expect(result).toBeFalsy();
    });

    test("testIsEqualNull", () => {
        let interval = new Interval(1, 1);

        const result = interval.isEqual(null)

        expect(result).toBeFalsy();
    });
});

