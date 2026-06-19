class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longestLength = 0;

  for(let i = 0; i < s.length; ++i) { 
    let charSet = new Set
    let rightPtr = i 

    while(!charSet.has(s[rightPtr]) && rightPtr < s.length) {
      charSet.add(s[rightPtr])
      rightPtr++
    }
    
    console.log(charSet)
    longestLength = Math.max(longestLength, charSet.size)
  }

  return longestLength
    }
}
