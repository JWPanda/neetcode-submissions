class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {}

 isValid(s ){
  const parenthesisStack = [];

    const parenthesisMap = {
  ')': '(',
  '}': '{',
  ']': '[',
}
  for (let i = 0; i < s.length; ++i) {
    if (Object.values(parenthesisMap).includes(s[i])) {
      parenthesisStack.push(s[i])
    } else if (parenthesisStack.pop() !== parenthesisMap[s[i]]) {
      return false
    }
  }
    
  return parenthesisStack.length === 0;
}
}
