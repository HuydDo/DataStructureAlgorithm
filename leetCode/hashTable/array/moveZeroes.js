/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let zeroCnt = 0;
  for (let i = nums.length - 1; i>=0; i--)
    if ( nums[i] === 0) {
      //increment zeroCount when found 0
      //move 0 to the end by swapping the elements
      zeroCnt++;
      for (let j = i; j < nums.length - zeroCnt; j++){
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        // console.log(j)
        // console.log(nums)
      }
    }
   return nums
};


let nums = [0,1,0,3,12] //Output: [1,3,12,0,0]
console.log(moveZeroes(nums))