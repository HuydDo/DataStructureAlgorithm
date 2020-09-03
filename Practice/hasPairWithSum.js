//0(n) linear search 
//go through each element check for value or add complement to the set

function hasPairWithSum(arr, sum){
  let set = new Set() //empty complements set
  for (let num of arr){
    if(set.has(num) ){
      return true
    } else {
      set.add(sum - num) //insert complement = 8 - num; eg: 8-1=7
    }
  }
  return false
}

let arr1 = [1,2,3,9] //false
let arr2 = [2,1,4,4] //true because pair 4,4 = 8
let arr3 = [] //false
console.log(hasPairWithSum(arr1, 8))
console.log(hasPairWithSum(arr2, 8))
console.log(hasPairWithSum(arr3, 8))