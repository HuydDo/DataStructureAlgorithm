//O(n) solution that uses a 2-pointer approach from front and back.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  
  while(l < r){
      const sum = numbers[l] + numbers[r];
      
      if(sum > target){
          r--;
      } else if(sum <target){
          l++;
      } else {
          return [l +1, r +1];
      }
          
  }
};




let A = [9,2,10,1,5,3,3];
let N = 12;

console.log(twoSum(A,N));
console.log(twoSum([2,7,11,15],9))

