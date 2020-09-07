const fibonacci = function(number) {
  if (number <= 1) {
    console.log(number)
    return number;
  }
  return fibonacci(number - 2) + fibonacci(number - 1);
}; //This will have an exponential time look-up since the function 
   //is looking at a every index an exponential number of times.

console.log(fibonacci(4))  //3
//2 + 3
//2 => 0 + 1 => 0 + 1
//3 => 1 + 2 => 1 + 0 + 1