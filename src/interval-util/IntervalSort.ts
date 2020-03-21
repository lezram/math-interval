import {Interval} from "../Interval";

export class IntervalSort {
    public static sort(intervals: Interval[]): Interval[] {
        const intervalsCopy: Interval[] = intervals.map(obj => (obj.copy()));

        intervalsCopy.sort((a: Interval, b: Interval) => {

            if (a.start < b.start) {
                return -1;
            } else if (a.start > b.start) {
                return 1
            }

            if (a.includeStart && !b.includeStart) {
                return -1;
            } else if (!a.includeStart && b.includeStart) {
                return 1;
            }

            if (a.end < b.end) {
                return -1;
            } else if (a.end > b.end) {
                return 1
            }

            if (a.includeEnd && !b.includeEnd) {
                return 1;
            } else if (!a.includeEnd && b.includeEnd) {
                return -1;
            }

            return 0;
        });

        return intervalsCopy;
    }
}
