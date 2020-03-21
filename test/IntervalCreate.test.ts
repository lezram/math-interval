import {Interval} from "../src/";

describe("IntervalCreateTest", () => {

    test("testInterval", () => {
        let interval = new Interval(1, 1);

        expect(interval).toEqual({
            start: 1,
            end: 1,
            includeStart: true,
            includeEnd: true
        });
    });

    test.each([
        [{s: null, e: null}],
        [{s: undefined, e: undefined}],
        [{s: "test", e: "test"}],
        [{s: 1, e: 1}],
    ])("testIntervalIncludeWithDefaults (%o)", (obj: any) => {
        let interval = new Interval(1, 1, obj.s, obj.e);

        expect(interval).toEqual({
            start: 1,
            end: 1,
            includeStart: true,
            includeEnd: true
        });
    });


    test.each([
        [null, 1, true, true],
        [1, null, true, true],
        [1, "invalid", true, true],
        ["invalid", 1, true, true],
        [2, 1, true, true],
        [1, 1, false, true],
        [1, 1, true, false],
    ])("testIntervalEmpty (%d, %d, %s, %s)", (start: number, end: number, includeStart: boolean, includeEnd: boolean) => {
        let interval = new Interval(start, end, includeStart, includeEnd);

        expect(interval.isEmpty()).toBeTruthy();
        expect(interval).toEqual({
            start: null,
            end: null,
            includeStart: null,
            includeEnd: null
        });
    });

    test("testIntervalEmptySameDateHalfOpen", () => {
        let interval = new Interval(1, 1, false, true);

        expect(interval.isEmpty()).toBeTruthy();
        expect(interval).toEqual({
            start: null,
            end: null,
            includeStart: null,
            includeEnd: null
        });
    });
});

