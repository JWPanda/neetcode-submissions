class Solution {
    /**
     * @param {number[][]} firstList
     * @param {number[][]} secondList
     * @return {number[][]}
     */
    intervalIntersection(
        firstList: number[][],
        secondList: number[][],
    ): number[][] {
        let i = 0;
        let j = 0;
        let res: number[][] = [];

        while(i < firstList.length && j < secondList.length) {
            let smaller = [];
            let larger =[];

            if (firstList[i][0] < secondList[j][0]) {
                smaller = firstList[i];
                larger = secondList[j];
            } else {
                smaller = secondList[j];
                larger = firstList[i];
            }
    
            if (smaller[1] >= larger[0]) {
                let overlap = [larger[0], Math.min(smaller[1], larger[1])];
                res.push(overlap);
            }

            if (firstList[i][1] < secondList[j][1]) {
                i++
            } else {
                j++
            }
            
        }

        return res;
    }
}
