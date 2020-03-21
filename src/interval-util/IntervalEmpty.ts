import {Util} from "../util/Util";

export class IntervalEmpty {

    public static isHandledAsEmpty(start: number, end: number, includeStart: boolean, includeEnd: boolean): boolean {
        
        if (Util.isNull(start) || Util.isNull(end) || isNaN(start) || isNaN(end)) {
            return true;
        }

        start = Number(start);
        end = Number(end);

        if (start > end || (start === end && (!includeStart || !includeEnd))) {
            return true;
        }
    }

}
