/**
 * @param {number[]} arr
 * @return {number[]}
 */
// var replaceElements = function(arr) {
    
// };

const replaceElements = arr => {
  for (let i = arr.length - 2, tmp = arr[arr.length - 1]; 0 <= i; i--){
    console.log(`before arr[i]: ${arr[i]} temp: ${tmp}`)
    if (tmp < arr[i]) [arr[i], tmp] = [tmp, arr[i]];
    else arr[i] = tmp;
    console.log(`after arr[i]: ${arr[i]} temp: ${tmp}`)
    console.log(arr)
  }
  arr[arr.length - 1] = -1;
 
  

  return arr;
};


let arr = [17,18,5,4,6,1] //Output: [18,6,6,6,1,-1]
console.log(replaceElements(arr))
