// var wordsReverser = function(string){
//   return string.split(' ')
//    .map(function(word) { 
//     return word.split('').reverse().join('')
//  }).join(' ');
// }

const wordsReverser = (string) => {
  return string.split(' ').map( word => 
    word.split('').reverse().join('')).join(' ')
}
console.log(wordsReverser('New string'))