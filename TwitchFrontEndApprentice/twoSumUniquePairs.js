function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
function twoSum(numbers, target){
  
  let arr = numbers.sort(function(a, b){return a-b});
  // console.log(arr)
  let arr2 = []
  let count = 0
  for (var i = 0; i < arr.length; i++){
    
    for (var j = i + 1; j < arr.length; j++){
      
      if(arr[i] + arr[j] === target){
         arr2.push([arr[i],arr[j]]);
      }
    }
  }
  let stringArray = arr2.map(JSON.stringify);
  let uniqueStringArray = new Set(stringArray);
  let uniqueArray = Array.from(uniqueStringArray, JSON.parse);
  
  return uniqueArray
}
  



console.log(twoSum([9,2,10,1,5,3,3], 12));
// console.log(twoSum([2, 4, 6, 8, 10], 18));