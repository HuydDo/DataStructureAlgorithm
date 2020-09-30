/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
  function mergeSortedArray(nums1, m, nums2, n) {
  let i = m -1
  let j = n - 1
  let k = m + n - 1

  while (i >= 0 && j >= 0 ) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      k--;
      i--;
    } else {
      nums1[k] = nums2[j] 
      k--;
      j--;
    }
    console.log(nums1)
  }
  while(j >= 0){
    nums1[k] = nums2[j];
    k--;
    j--;
    console.log(nums1)
  }

  console.log("\t -> mergeSortedArray:", nums1);
}

//Input:
let nums1 = [1,2,3,0,0,0], m = 3
let nums2 = [2,5,6], n = 3

mergeSortedArray(nums1, m, nums2, n)
//Output: [1,2,2,3,5,6]