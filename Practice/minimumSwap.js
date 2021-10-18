//undorder array of consecutive ints
//swap any 2 el
//find min swaps for sorted arr
//in [7,1,3,2,4,5,6]
//out 5

//find min
//check index
//if val of index !== index + min
//find correct val
//swap correct val with val at current index
//coount swap

function minimumSwap(arr){
  let unsorted = [...arr];
  let min = Math.min(...arr)
  let swaps = 0;
  for(let i = 0; i < unsorted.length; i++){
    if(unsorted[i] !== i + min){
      console.log('unsorted[i]: '+unsorted[i] + ' i+min: ' + (i+min) )
      let idx = unsorted.indexOf(i+min, i)
      let temp = unsorted[i];
      console.log('idx: ' + idx)
      
      unsorted[idx] = temp;
      console.log(unsorted)
      swaps++;
    }
   }
  return swaps;
}

console.log(minimumSwap([7,1,3,2,4,5,6]))  //5
// console.log(minimumSwap([-7, 1, -3, 2, 4, 5, 6])) //6
// console.log(minimumSwap([1, 3, 2,4 ])) //1
// console.log(minimumSwap([1,2,3]))//0
// console.log(minimumSwap([100,99,98,10]))//1