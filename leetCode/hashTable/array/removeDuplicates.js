/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0;
  let i = 0;
  for(let j=1; j<nums.length; j++) {
    if (nums[i] != nums[j]){
      i++;
      nums[i] = nums[j];
    }
  }
  return i+1
};

let nums = [1,1,2] //Output: 2, nums = [1,2]
// let nums = [0,0,1,1,1,2,2,3,3,4] //Output: 5, nums = [0,1,2,3,4]
console.log(removeDuplicates(nums))
let len = removeDuplicates(nums)
for (let i = 0; i < len; i++) {
  console.log(nums[i]);
}