class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
  const anagramMap = new Map()
    
  for(let i = 0; i < strs.length; ++i) {
    const sortedStr = strs[i].split('').sort().join('');

    if(!anagramMap.has(sortedStr)) {
      anagramMap.set(sortedStr,[])
    }

    anagramMap.get(sortedStr).push(strs[i])
  }

  return Array.from(anagramMap.values())
};
}
