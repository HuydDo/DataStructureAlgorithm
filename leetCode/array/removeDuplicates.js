/**
 * @param {number[]} nums
 * @return {number}
 * Time complextiy : O(n). Assume that n is the length of array. 
 * Each of i and j traverses at most n steps.

Space complexity : O(1).
 */
// const removeDuplicates = function(nums) {
//   if (nums.length == 0) return 0;
//   let i = 0;
//   for(let j=1; j<nums.length; j++) {
//     if (nums[i] != nums[j]){
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//   return i+1
// };



var  removeDuplicates = function(nums){
  let l = 0;
  let r = 1;

  // while(r < nums.length){
  //   if(nums[l] !== nums[r]){
  //     l +=1;
  //     // const temp = nums[l];
  //     // num[l] = num[r]
  //     // num[r]= temp;
  //     [nums[l], nums[r]] = [nums[r], nums[l]]
  //   }
  //   r +=1;
  // }
  // return l+1;
  
  for(let i = 1; i<nums.length; i++){
    console.log('i: ' + i);
    if(nums[l] !== nums[r]){
      l +=1;
      console.log('l: ' + l);
      [nums[l], nums[r]] = [nums[r], nums[l]];
      console.log([nums[l], nums[r]]);
    }
    r +=1;
    console.log('r: ' + r)
  }
  return l+1;
};


let nums = [1,1,2] //Output: 2, nums = [1,2]
// let nums = [0,0,1,1,1,2,2,3,3,4] //Output: 5, nums = [0,1,2,3,4]
console.log(removeDuplicates(nums))

