/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let count = 0
    for (let i = 0; i < stones.length; i++){
      const stone = stones[i]
      if(jewels.indexOf(stone) !== -1)
        count++
    }
    return count
};

console.log(numJewelsInStones('aA','aAAbbb'))