class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
  maxProfit(prices) {
    let max= 0;
    let minPrice = prices[0]

    for (let i = 0; i < prices.length; ++i) {
      minPrice = Math.min(minPrice, prices[i]);
      max = Math.max(max, prices[i] - minPrice)
    }


    return max
  }
}
