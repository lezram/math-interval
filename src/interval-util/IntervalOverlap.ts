import {Interval} from "../Interval";

export class IntervalOverlap {

    public static areOverlapping(interval1: Interval, interval2: Interval): boolean {
        if (!interval1 || !interval2 || interval1.isEmpty() || interval2.isEmpty()) {
            return false;
        }

        if (interval1.start === interval2.end) {
            return (interval1.includeStart || interval2.includeEnd);
        }

        if (interval1.end === interval2.start) {
            return interval1.includeEnd || interval2.includeStart;
        }

        return (interval1.start <= interval2.start && interval2.start <= interval1.end) ||
            (interval1.start <= interval2.end && interval2.end <= interval1.end) ||
            (interval2.start <= interval1.start && interval1.start <= interval2.end) ||
            (interval2.start <= interval1.end && interval1.end <= interval2.end);
    }

}
