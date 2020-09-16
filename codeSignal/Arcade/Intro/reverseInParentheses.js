const reverseInParentheses = (inputString) => {

  if (inputString.includes('(')){
      return reverseInParentheses(reverseOnce(inputString));
  } else {     
      return inputString;
  }
}
