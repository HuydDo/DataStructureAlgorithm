// Write function that follows this pattern.
// fn(pattern, word) bool
// fn(d1tadog, datadog) -> True
// fn(d2adog, datadog) -> True
// fn(d5dog, datadog) -> False
// fn(d2tadog, datadog) -> False
// fn(datadog, datadog) -> True
// fn(2, ae) -> True
// fn(2eeee, e) -> False

function matchingPatterns(pattern, word){
  // first check if the pattern is only numbers
  // if yes check if the pattern is equal to the length of the word
  // if not move to the for loop
  if(typeof(pattern) === 'number'){
      return pattern === word.length;
  };
  
  // spread the pattern string into an array
  let patternArr = [...pattern];
  // creates a variable to hold the number in the string
  let num=0;

  // loop through the array
  // check if the character in the array is a number
  // if yes enter the if statement
  // splice the array at the index of the number and save into the num variable
  for(let char of patternArr){
      if(!isNaN(parseInt(char))){
          num = patternArr.splice(patternArr.indexOf(char), 1);
      };
  };
  // check if the length of the array plus the number is equal to the length of the word
  // if yes return true otherwise return false
  
  
  return patternArr.length + parseInt(num) === word.length;
};

console.log(matchingPatterns(2, 'ae')); //->True
console.log(matchingPatterns('d1tadog', 'datadog')); //->True
console.log(matchingPatterns('d2adog', 'datadog')); //->True
console.log(matchingPatterns('d5dog', 'datadog'));  //->False

console.log(matchingPatterns(2, 'ae')); //->True
console.log(matchingPatterns('d2tadog', 'datadog'))// -> False
console.log(matchingPatterns('datadog', 'datadog'))// -> True
console.log(matchingPatterns('2eeee', 'e'))// -> False