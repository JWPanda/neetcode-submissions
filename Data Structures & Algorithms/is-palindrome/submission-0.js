class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        { 
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while(leftPointer < rightPointer) {
    // Skip non-alphanumeric characters from left
    while(leftPointer < rightPointer && !s[leftPointer].match(/[a-zA-Z0-9]/)) {
      leftPointer++;
    }
    // Skip non-alphanumeric characters from right
    while(leftPointer < rightPointer && !s[rightPointer].match(/[a-zA-Z0-9]/)) {
      rightPointer--;
    }

    if (s[leftPointer].toLowerCase() !== s[rightPointer].toLowerCase()) {
      return false;
    }

    leftPointer++;
    rightPointer--;
  }

  return true;
}
    }
}
