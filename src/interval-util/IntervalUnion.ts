import {Interval} from "../Interval";
import {Util} from "../util/Util";
import {IntervalSort} from "./";

export class IntervalUnion {
    public static union(intervals: Interval[]): Interval[] {
        if (!intervals || intervals.length <= 0) {
            return [];
        }

        let relevantIntervals = intervals.filter((interval) => !Util.isNull(interval) && !interval.isEmpty());

        if (relevantIntervals.length === 0) {
            return [];
        }

        relevantIntervals = IntervalSort.sort(relevantIntervals);

        let current = relevantIntervals[0];
        const result: Interval[] = [];

        for (let i = 1; i < relevantIntervals.length; ++i) {
            const next = relevantIntervals[i];

            if (current.isOverlapping(next)) {
                let unionStart = current.start;
                let unionEnd = current.end;
                let unionIncludeStart = current.includeStart;
                let unionIncludeEnd = current.includeEnd;

                // not needed because of presorting (next.start < current.start)

                if (next.end > current.end) {
                    unionEnd = next.end
                    unionIncludeEnd = next.includeEnd;
                }

                if (next.start === current.start && (next.includeStart || current.includeStart)) {
                    unionIncludeStart = true;
                }

                if (next.end === current.end && (next.includeEnd || current.includeEnd)) {
                    unionIncludeEnd = true;
                }

                current = new Interval(unionStart, unionEnd, unionIncludeStart, unionIncludeEnd);
            } else {
                result.push(current);
                current = next;
            }
        }
        result.push(current);

        return result;
    }
}
