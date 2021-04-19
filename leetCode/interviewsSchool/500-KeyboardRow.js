/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
  let keyboard = {'q':1, 'w':1, 'e':1, 'r':1, 't':1, 'y':1, 'u':1, 'i':1, 'o':1, 'p':1,
  'a':2, 's':2, 'd':2, 'f':2, 'g':2, 'h':2, 'j':2, 'k':2, 'l':2,
  'z':3, 'x':3, 'c':3, 'v':3, 'b':3, 'n':3, 'm':3}

  let result = []

  for (let word of words){
    let l_word = word.toLowerCase()
    let loc = keyboard[l_word[0]]
    let same = true

    for (let c of l_word){
      if (keyboard[c] != loc){
       same = false
       break
      }
    }

    if (same){ 
      result.push(word)
    }  
  }

  return result
}

let words = ["Hello","Alaska","Dad","Peace"]

console.log(findWords(words)) //Output: ["Alaska","Dad"]