import {IntervalEmpty, IntervalOverlap, IntervalSort, IntervalUnion} from "./interval-util";
import {Util} from "./util/Util";

export class Interval {
    public readonly start: number;
    public readonly end: number;
    public readonly includeStart: boolean;
    public readonly includeEnd: boolean;

    public constructor(start: number, end: number, includeStart?: boolean, includeEnd?: boolean) {
        if (Util.isNull(includeStart)) {
            includeStart = true;
        } else {
            includeStart = Boolean(includeStart);
        }

        if (Util.isNull(includeEnd)) {
            includeEnd = true;
        } else {
            includeEnd = Boolean(includeEnd);
        }

        if (IntervalEmpty.isHandledAsEmpty(start, end, includeStart, includeEnd)) {
            this.start = null;
            this.end = null;
            this.includeStart = null;
            this.includeEnd = null;
        } else {
            this.start = Number(start);
            this.end = Number(end);
            this.includeStart = includeStart;
            this.includeEnd = includeEnd;
        }
    }

    public isEmpty(): boolean {
        return null === this.start &&
            null === this.end &&
            null === this.includeStart &&
            null === this.includeEnd;
    }

    public isOverlapping(interval: Interval): boolean {
        return IntervalOverlap.areOverlapping(this, interval);
    }

    public copy(): Interval {
        return Object.assign(new Interval(null, null), this);
    }

    public isEqual(interval: Interval): boolean {
        if (!interval) {
            return false;
        }

        return this.start === interval.start &&
            this.end === interval.end &&
            this.includeStart === interval.includeStart &&
            this.includeEnd === interval.includeEnd;
    }

    public static sort(...intervals: Interval[]): Interval[] {
        return IntervalSort.sort(intervals);
    }

    public static union(...intervals: Interval[]): Interval[] {
        return IntervalUnion.union(intervals);
    }
}
