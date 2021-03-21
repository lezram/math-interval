import {Interval} from "../Interval";

export class IntervalMatch {

    public static isOverlapping(interval1: Interval, interval2: Interval): boolean {
        if (!this.isIntervalComparable(interval1, interval2)) {
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

    public static contains(interval: Interval, intervalToCheck: Interval): boolean {
        if (!this.isIntervalComparable(interval, intervalToCheck)) {
            return false;
        }

        const startIsEqual = (interval.start === intervalToCheck.start && (interval.includeStart || !intervalToCheck.includeStart));
        const endIsEqual = (interval.end === intervalToCheck.end && (interval.includeEnd || !intervalToCheck.includeEnd));

        return ((interval.start < intervalToCheck.start || startIsEqual) &&
            (intervalToCheck.end < interval.end || endIsEqual));
    }

    private static isIntervalComparable(interval1: Interval, interval2: Interval): boolean {
        return interval1 && interval2 && !interval1.isEmpty() && !interval2.isEmpty();
    }

}
