class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        let curr = 0;
        let len = intervals.length;
        let mergedInterval: number[] = newInterval;
        let newArray: number[][] = []

        while(curr < len && mergedInterval[0] > intervals[curr][1]) {
            newArray.push(intervals[curr]);
            curr++;
        }

        while(curr < len && mergedInterval[1] >= intervals[curr][0]) {
            mergedInterval[0] = Math.min(mergedInterval[0], intervals[curr][0])
            mergedInterval[1] = Math.max(mergedInterval[1], intervals[curr][1])
            curr++;
        }

        newArray.push(mergedInterval)

        while(curr < len) {
            newArray.push(intervals[curr])
            curr++;
        }

        return newArray;
    }
}
