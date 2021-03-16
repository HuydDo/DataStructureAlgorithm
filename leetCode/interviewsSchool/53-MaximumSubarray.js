/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  if (!nums || nums.length == 0) {
      return 0
  }
  var res = Number.MIN_SAFE_INTEGER
  var sum = 0
  for (i=0; i<nums.length; i++) {
      sum += nums[i]
      console.log('sum: ' + sum)
      res = Math.max(res, sum)
      sum = Math.max(sum, 0)
      console.log('res: ' + res + ' sum: ' + sum)
  }
  return res
};

let nums = [-2,1,-3,4,-1,2,1,-5,4]
maxSubArray(nums)

