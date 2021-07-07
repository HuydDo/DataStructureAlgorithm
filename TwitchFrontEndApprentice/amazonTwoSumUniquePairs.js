const getUniquePairs = (nums, target) => {

  let hmap = {}
 
  for (let i = 0; i < nums.length; i++) {
   if (!hmap[nums[i]]) {
    hmap[target - nums[i]] = nums[i]
    // console.log('assign hmap with key/value: ',target - nums[i], ':', nums[i])
   }
  }
 
  return Object.keys(hmap).length
 
 }


//  console.log(getUniquePairs([9,2,10,1,5,3,3], 12)); //4
//  console.log(getUniquePairs([1, 1, 2, 45, 46, 46],47)) //2
//  console.log(getUniquePairs([1, 1],2)) //1
 console.log(getUniquePairs([1, 5, 1],6)) //1