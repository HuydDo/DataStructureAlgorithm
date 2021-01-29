/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  
    let sum=0, product=1, result=0;
   
    while ( n > 0) {
        let lastDigit = n % 10;
        sum += lastDigit;
        product *=lastDigit
        n = Math.floor(n/10)
        console.log(parseInt(n))
    }
    result = product - sum
    return result;

};

console.log(subtractProductAndSum(11))