/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
  var res = []
  var p=1
  res.push(1)
  for (var i=1; i<nums.length; i++) {
      p*=nums[i-1]
      res.push(p)
  }
  console.log('res: ' + res)
  console.log('nums: ' + nums)
  p=1
  for (var i=nums.length-2; i>=0; i--) {
      p*=nums[i+1]
      res[i]*=p
  }
  return res
};

let nums = [1,2,3,4]
console.log(productExceptSelf(nums))