/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j--) {
        // console.log(arr.length)
        arr[j] = arr[j - 1];
        console.log('j: ' + j + ' arr[j]: ' + arr[j])
      }
      i++;
    }
  }
  return arr
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]))  //[1,0,0,2,3,0,0,4]