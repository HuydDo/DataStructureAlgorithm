/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for(let i=0; i<arr.length; i++){
      let num = arr[i]
      for (let j=0; j <arr.length; j++){
        if (j !== i){
         if (arr[j] === num * 2){
           return true
         }
        }
      }
    }
    return false;
};


// let arr = [10,2,5,3] //true
// let arr = [7,1,14,11] //true
let arr = [3,1,7,11] //false
console.log(checkIfExist(arr))