/**
 * @param {number[]} nums
 * @return {number}
 */
 var  removeDuplicates = function(nums){
  let l = 0;
  let r = 1;
  
  while(r < nums.length){
      if(nums[l] !== nums[r]){
        l +=1;
        [nums[l], nums[r]] = [nums[r], nums[l]]
      }
      r +=1;
  }
  
  return l+1
};