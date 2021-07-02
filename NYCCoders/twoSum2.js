function twoSum(A,N){
  let l = 0;
  let r = A.length-1;
  
  let arr = []
   
  
  while( l < r )
  {
    const sum = A[l]+ A[r] 
    if( sum> N){
      r-=1;
    } else if (sum <N){
      l-=1;
    } else {
      return[l+1,r+1];
    }
   }
   
 }


let A = [2,7,9,11,15];
let N = 9;
console.log(twoSum(A,N));