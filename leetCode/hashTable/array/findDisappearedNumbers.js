/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
      let counter = 1
      const answer = []
      while (counter <= nums.length) {
          for (let i =0; i<nums.length; i++) {
              if (nums[i] === counter) break
              if (i === nums.length-1) answer.push(counter)
          }
          counter ++
      }
      return answer
  };

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))  //[5,6]