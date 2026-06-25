class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        if (intervals.length === 0) return [];

        intervals.sort((a, b) => a[0] - b[0]);

        let resArray: number[][] = [intervals[0]]
        intervals.shift()

        while (intervals.length > 0) {
            let lastAdded = resArray[resArray.length - 1]
            if (lastAdded[1] >= intervals[0][0]) {
                lastAdded[1] = Math.max(lastAdded[1], intervals[0][1]);
            } else {
                resArray.push(intervals[0])
            }

            intervals.shift()
        }

        return resArray
    }

}
