class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
  trap(height) {
    let maxArea = 0;
    let leftMaxArr = Array(height.length).fill(height[0])
    let rightMaxArr = Array(height.length).fill(height[height.length - 1])

    // build left max array
    for (let i = 1; i < height.length; ++i) {
      leftMaxArr[i] = Math.max(leftMaxArr[i - 1], height[i])
    }


    // build right max array
    for (let i = height.length - 2; i >= 0; --i) {
      rightMaxArr[i] = Math.max(rightMaxArr[i + 1], height[i])
    }

    for (let i = 0; i < height.length; ++i) {
      const waterAtCurrIndex = Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i]
      maxArea += waterAtCurrIndex
    }

    return maxArea;
  }
}