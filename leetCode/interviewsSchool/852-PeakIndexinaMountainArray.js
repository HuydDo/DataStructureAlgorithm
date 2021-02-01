/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let i = 0;
    while(arr[i] < arr[i+1]) i++
    return i
};
// array = [0,2,1,0]
array = [24,69,100,99,79,78,67,36,26,19]
console.log(peakIndexInMountainArray(array))