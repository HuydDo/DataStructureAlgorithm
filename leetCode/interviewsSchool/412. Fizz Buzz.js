/**
 * @param {number} n
 * @return {string[]}
 */

//return array
var fizzBuzz = function(n) {
  let arr = []
  for(let i= 1; i <= n; i++){ 
      let str = ""
      
      if((i % 3 == 0) && (i % 5 == 0)) str += "FizzBuzz"
      else if (i % 3 == 0) str +="Fizz"
      else if(i % 5 == 0) str += "Buzz"
      else
        str += i.toString()
    
      arr.push(str)
  }
  return arr


//print out the string
// for(let i= 1; i <= n; i++){ 
//   let str = ""
  
//   if((i % 3 == 0) && (i % 5 == 0)) str += "FizzBuzz"
//   else if (i % 3 == 0) str +="Fizz"
//   else if(i % 5 == 0) str += "Buzz"
//   console.log(str|| n);
// }

};

fizzBuzz(15)

