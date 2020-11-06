/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
   let n = arr.length
   if(n <=2 ) return false //check arr.length >=3
   if(arr[0] >= arr[1] || arr[n-2] <= arr[n-1]) return false
   let up = true
   for(let i=0; i<n; i++){
     if(up){
       if(arr[i] < arr[i-1]) up=false
       if(arr[i] === arr[i-1]) return false
     } else {
       if(arr[i] >= arr[i-1]) return false
     }
   }
   return true
};

// let arr = [2,1] //Output false
// let arr = [3,5,5] //Output: false
let arr = [0,3,2,1] //Output: true

console.log(validMountainArray(arr))