function threeSum(nums) {
    let sum = 0
    let results = []

    nums = nums.sort((a,b) => a - b)
    console.log(nums)
    for (let a = 0; a < nums.length; a++) {
        if (a > 0 && nums[a] == nums[a - 1]) continue
        let diff = sum - nums[a]
        let b = a + 1
        let c = nums.length - 1

        while (b < c) {
            if (nums[b] + nums[c] == diff) {
                let pushArr = [nums[a], nums[b], nums[c]]
                results.push(pushArr)
                while (b < c && nums[b] == nums[b + 1]) b++
                while (b < c && nums[c] == nums[c - 1]) c--
                b++
                c++
            } else if (nums[b] + nums[c] < diff) {
                b++
            } else {
                c--
            }
        }
    }
    return results
}

let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))

//Output: [[-1,-1,2],[-1,0,1]]