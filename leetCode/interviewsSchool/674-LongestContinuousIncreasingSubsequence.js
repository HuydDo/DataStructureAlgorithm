/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length==1) return 1;
  else {
        let max=0;
        for (let i=0;i<nums.length-1;i++) {
            let count=1;
            while (i<nums.length-1 && nums[i]<nums[i+1]) {
                count++;
                i++;
            }
            if (count>max) {
                max=count;
            }
        }
        return max; 
  }
};

let arr = [1,2,5,4,7]
console.log(findLengthOfLCIS(arr))