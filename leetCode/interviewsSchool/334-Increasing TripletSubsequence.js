/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  var min1 = Number.MAX_VALUE;
  var min2 = Number.MAX_VALUE;
  for (var i=0; i<nums.length; i++) {
      var num = nums[i];
      if (num<min1) min1 = num;
      else if (num>min1 && num<min2) min2 = num;
      else if (num>min2) return true;
  }
  return false;
};

var nums = [1,2,3,4,5];
console.log(increasingTriplet(nums));

nums = [5,4,3,2,1];
console.log(increasingTriplet(nums));

nums = [2,1,5,0,4,6];
console.log(increasingTriplet(nums));