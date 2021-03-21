import {Interval} from "../Interval";

export class IntervalFrom {
    public static from(intervalNotation: string): Interval {

        if (null === intervalNotation || !(typeof intervalNotation === "string")) {
            throw new Error(`Invalid interval definition`);
        }

        const regex = new RegExp(/^{}|{\s*([^\s\t\n\r,]+)\s*}|([(\[\]])\s*([^\s\t\n\r,]+)\s*,\s*([^\s\t\n\r,]+)\s*([)\]\[])$/);
        const matches = regex.exec(intervalNotation);

        if (matches && matches.length === 6) {
            if (matches[1] !== undefined) {
                const start = Number(matches[1]);
                const end = Number(matches[1]);
                const includeStart = true;
                const includeEnd = true;
                return new Interval(start, end, includeStart, includeEnd);
            } else {
                const start = Number(matches[3]);
                const end = Number(matches[4]);
                const includeStart = (matches[2] === "[");
                const includeEnd = (matches[5] === "]");
                return new Interval(start, end, includeStart, includeEnd);
            }
        }

        throw new Error(`Invalid interval definition ${intervalNotation}`);
    }
}
