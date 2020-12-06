const fibonacci = function(number) {
  if (number <= 1) {
    // console.log(number)
    return number;
  }
  return fibonacci(number - 2) + fibonacci(number - 1);
}; //This will have an exponential time look-up since the function 
   //is looking at a every index an exponential number of times.

console.log(fibonacci(4))  //3
//2 + 3
//2 => 0 + 1 => 0 + 1
//3 => 1 + 2 => 1 + 0 + 1


function fibonacci2(n) {  
  const fibSequence = [1];   
  let currentValue = 1;  
  let previousValue = 0;   
  if (n === 1) { 
     return fibSequence;  
  }   
  let iterationsCounter = n - 1;   
  while (iterationsCounter) { 
    // console.log('counter ',iterationsCounter)   
    currentValue += previousValue;   
    // console.log('currVal ', currentValue) 
    previousValue = currentValue - previousValue;
    // console.log('preVal ', previousValue)
    fibSequence.push(currentValue);     
    iterationsCounter -= 1;  
  }   
  return fibSequence;
}

console.log(fibonacci2(3))  //[1, 1, 2]