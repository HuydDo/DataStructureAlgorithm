const hasDuplicates = function(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (array.slice(i + 1).indexOf(item) !== -1) {
      return true;
    }
  }
  return false;
}; //This will have a quadratic time look-up since the function is
   //looking at a every index in the array twice.

   console.log(hasDuplicates([2,4,2,3]))