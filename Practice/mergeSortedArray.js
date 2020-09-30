/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
  function mergeSortedArray(nums1, m, nums2, n) {
  let length = m + n - 1
  m--
  n--
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[length--] = nums1[m--]
    } else {
      nums1[length--] = nums2[n--] 
    }
  }
  return nums1
}

//Input:
let nums1 = [1,2,3,0,0,0], m = 3
let nums2 = [2,5,6], n = 3

console.log(merge(nums1, m, nums2, n))
//Output: [1,2,2,3,5,6]