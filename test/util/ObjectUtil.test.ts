import {Util} from "../../src/util/Util";

describe("UtilTest", () => {
    const testee = Util;

    test("testIsNull", () => {
        const result = testee.isNull(null);

        expect(result).toBeTruthy();
    });

    test("testIsNullWithUndefined", () => {
        const result = testee.isNull(undefined);

        expect(result).toBeTruthy();
    });

    test("testIsNullWithEmptyString", () => {
        const result = testee.isNull("");

        expect(result).toBeFalsy();
    });

    test("testIsNullWithZero", () => {
        const result = testee.isNull(0);

        expect(result).toBeFalsy();
    });

    test("testIsNullWithObject", () => {
        const result = testee.isNull({test: 1});

        expect(result).toBeFalsy();
    });

});

