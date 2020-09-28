/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let result = 0;
  for(let num of nums){
      // console.log(num.toString().length%2==0)
      if (num.toString().length%2==0)
        result++
  }
  return result;
};

let nums = [12,345,2,6,7896]
console.log(findNumbers(nums))