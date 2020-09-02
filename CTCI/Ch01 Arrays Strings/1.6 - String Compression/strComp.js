function strComp(string){
  let obj = {}
  for(let i = 0; i < string.length; i++){
    if (obj[string.charAt(i)]){
      obj[string.charAt(i)] +=1
    } else {
      obj[string.charAt(i)] =1
    }

    for (let prop in obj){
      // console.log(prop + obj[prop])
      return (prop + obj[prop])
    }
  }

}


// Test
// console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');