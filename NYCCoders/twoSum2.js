//O(n) solution that uses a 2-pointer approach from front and back.

function twoSum(A,N){
  let l = 0;
  let r = A.length-1;
  
  let arr = []
   
  
  while( l < r )
  {
    let sum = A[l]+ A[r] 
    if( sum> N){
      r-=1;
    } else if (sum <N){
      l-=1;
    } else {
      return[l+1,r+1];
    }
   }

 }


let A = [9,2,10,1,5,3,3];
let N = 12;
console.log(twoSum(A,N));