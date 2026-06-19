class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        {
const heightsLen = heights.length;
  let maxWater = 0;
  let leftPtr = 0;
  let rightPtr = heightsLen - 1;
  
  while(leftPtr < rightPtr) {
    const currWater = Math.min(heights[leftPtr], heights[rightPtr]) * (rightPtr - leftPtr)
    maxWater = Math.max(currWater, maxWater)

    if (heights[leftPtr] < heights[rightPtr]) {
      ++leftPtr
    } else {
      --rightPtr
    }
  }

  return maxWater}
    }
}
