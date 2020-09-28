/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let count = 0
  let maxCount = 0
  
  for(let num of nums){
      if (num == 1) {
          count++
      } else {
          maxCount = Math.max(maxCount, count)
          count = 0
      }
  }
  
  return Math.max(count, maxCount)
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))