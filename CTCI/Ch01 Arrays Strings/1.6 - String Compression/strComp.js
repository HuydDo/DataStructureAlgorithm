function strComp(string){
  let str = string.toLowerCase()
  let arr = []
  let count = 1

  for(let i = 0; i < str.length; i++){

    let currChar = str[i]
    if(str[i] === string[i+1]){
      count++
    } else {
      arr.push(currChar, count)
      count = 1
    }
  }
  // console.log('arr.len:' + arr.length + ' str.len: ' + str.length)
  if(arr.length > str.length){
    return str
  } else {
    return arr.join('')
  }
    
}


// Test
console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');