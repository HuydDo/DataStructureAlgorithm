/**
 * @param {number[]} prices
 * @return {number}
 */
//O(n) solution that does a one pass: updates the min price 
// and the max difference from subtracting the price of the day from the min

 var maxProfit = function(prices) {
  let min = Infinity
  let max = 0
  for(let i = 0; i < prices.length; i++){
    // find min
    if(prices[i] < min){
      min = prices[i]
    } 
    // find max difference
    else if (prices[i] - min > max){
      max = prices[i] - min
    }
  }
  return max
};

console.log(maxProfit([7,1,5,3,6,4])) //5