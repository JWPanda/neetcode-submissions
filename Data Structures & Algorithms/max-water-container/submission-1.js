class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        {
  let maxArea = 0;

  for(let i = 0; i < heights.length; ++i) {
    let left = i;
    let right = heights.length - 1;

    while(left < right) {
      const area = Math.min(heights[left], heights[right]) * (right - left);

      maxArea = Math.max(maxArea, area);

      right--;
    }
  }
  return maxArea;
}
    }
}
