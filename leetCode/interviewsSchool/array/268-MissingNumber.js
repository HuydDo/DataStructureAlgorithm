/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  // if (!nums || nums.length == 0) {
  //   return -1
  // }
  // var res = 0
  // for (var i=0; i<nums.length; i++) {
  //     res = res ^ nums[i] ^ (i+1)
  // }
  // return res

  // let diff = 0;
  //       for (let i = 0; i < nums.length; i++) {
  //           diff += nums[i] - i;
  //       }
  //       return nums.length - diff;  
  
  let  missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
      missing ^= i ^ nums[i];
      console.log(missing)
      //3 0 3 = 3 ; 3 1 0 = 0; 0 2 1 = 1
  }
  return missing;
};

let nums = [3,0,1]
console.log(missingNumber(nums))