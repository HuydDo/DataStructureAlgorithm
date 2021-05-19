/**
 * @param {number[]} nums
 * @return {number}
 * Time complextiy : O(n). Assume that n is the length of array. Each of i and j traverses at most n steps.

Space complexity : O(1).
 */
const removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    let i = 0;
    let newArray = []
    for(let j=1; j<nums.length; j++) {
      if (nums[i] != nums[j]){
        i++;
        nums[i] = nums[j];
        newArray[i] = nums[j]
      }
    }
    console.log(nums.slice(0,newArray.length))
    return i+1
};

let nums = [1,1,2]
// let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))