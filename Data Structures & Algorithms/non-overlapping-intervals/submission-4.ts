class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        intervals.sort((a, b) => a[1] - b[1]);
        let removed = 0;
        let prevEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            if (prevEnd > intervals[i][0]) {
                removed++
            } else {
                prevEnd = intervals[i][1]
            }
        }


        return removed
    }
}
