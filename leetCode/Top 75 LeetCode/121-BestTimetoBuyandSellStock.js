/**
 * @param {number[]} prices
 * @return {number}
 */
//O(n) solution that does a one pass and continously updates the min price as well
//as the max difference gained from subtracting the price of the day from the min

 var maxProfit = function(prices) {
  let min = Infinity
  let max = 0
  for(let i = 0; i < prices.length; i++){
    if(prices[i] < min){
      min = prices[i]
    } else if (prices[i] - min > max){
      max = prices[i] - min
    }
  }
  return max
};

console.log(maxProfit([7,1,5,3,6,4])) //5