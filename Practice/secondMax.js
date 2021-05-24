//Time and complexity O(n)

const secondMax = function(arr){
  //check if array is array and has 2 or more elements, otherwise return null
  if (!(Array.isArray(arr)) || arr.length < 2){
    return null;
  }

  //create new array to prevent mutating
  const newArr = [...arr];  //O(n)
  maxIndex = newArr.indexOf(Math.max(...newArr));  //O(2n)
  newArr.splice(maxIndex,1);  //O(n)
  return Math.max(...newArr)  //O(n)

}


console.log(secondMax([1,2,3,4,5]))  // 4
console.log(secondMax([-4]))  // null
console.log(secondMax(['abcd']))  // null
console.log(secondMax([1,1,1,1]))  // 1