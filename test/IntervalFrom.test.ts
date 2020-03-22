import {Interval} from "../src";

describe("IntervalFromTest", () => {
    const testee = Interval;

    test.each([
        ["[", "]", true, true],
        ["]", "[", false, false],
        ["[", "[", true, false],
        ["]", "]", false, true],
        ["(", ")", false, false],
        ["(", "]", false, true],
        ["[", ")", true, false],
        ["(", "[", false, false],
        ["]", ")", false, false],
    ])("testFrom (%s, %s, %s, %s)", (includeStart: string,
                                     includeEnd: string,
                                     includeStartExpected: boolean,
                                     includeEndExpected: boolean) => {

        let interval = testee.from(includeStart + '1,3' + includeEnd)

        expect(interval).toEqual({
            start: 1,
            end: 3,
            includeStart: includeStartExpected,
            includeEnd: includeEndExpected
        });
    });

    test("testFromDegenerated", () => {
        let interval = testee.from('{1}')

        expect(interval).toEqual({
            start: 1,
            end: 1,
            includeStart: true,
            includeEnd: true
        });
    });

    test("testFromEmpty", () => {
        let interval = testee.from('{}')

        expect(interval).toEqual({
            start: null,
            end: null,
            includeStart: null,
            includeEnd: null
        });
    });

    test.each([
        "[1,2,3]",
        "1",
        "1,2",
        "a,b]",
        "[]",
        "()",
        213,
        {a: 1}
    ])("testFromInvalidString", (value: string) => {
        let from = (): void => {
            testee.from(value);
        }

        expect(from).toThrowError();
    });
});

