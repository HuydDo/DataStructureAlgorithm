/**
 * @param {string} s
 * @return {number}
 */
let s = 'abc'

var countSubstrings = function(s) {
    

//O(n) solution that expands from the center of each index.

let ans = 0
//The middle of the palindrome can be at one of two (2n - 1) positions:
//at the letter or between two letters
for (let i = 0; i < (2*s.length) - 1; i++) {
    let left = Math.floor(i / 2)
    console.log('left',left)
    let right = left + i % 2
    console.log('right', right)
    //Expand at the center
    while (left >= 0 && right < s.length && s[left] == s[right]) {
        console.log('palindromic string')
        ans++
        left--
        right++
    }
}

return ans
};
console.log(countSubstrings(s))