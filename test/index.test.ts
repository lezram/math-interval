const RequireInterval = require('../src').Interval;
import {Interval as ImportInterval} from '../src';

describe("IndexTest", () => {
    test("testRequireImport", () => {
        let interval1 = new RequireInterval(1, 1);
        let interval2 = new RequireInterval(1, 1);

        const result = interval1.isEqual(interval2)

        expect(result).toBeTruthy();
    });

    test("testImport", () => {
        let interval1 = new ImportInterval(1, 1);
        let interval2 = new ImportInterval(1, 1);

        const result = interval1.isEqual(interval2)

        expect(result).toBeTruthy();
    });
});
