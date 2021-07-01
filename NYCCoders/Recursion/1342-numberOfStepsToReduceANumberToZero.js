/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
  let step = 0;  
  if (num <= 0){
    return step 
  }
   while(num > 0){  

    if(num % 2 === 0)
      num = num / 2;
    else
      num -= 1;
    step++;   
   }
   return step
};

console.log(numberOfSteps(8))