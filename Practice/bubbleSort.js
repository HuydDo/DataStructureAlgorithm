function bubbleSort(array){
  let done = false
  while(!done){
    done = true
    for(let i=1; i<array.length; i++){
      if(array[i-1] > array[i]){
        done = false
        let temp = array[i-1]
        array[i-1] = array[i]
        array[i] = temp
      }
    }
  }
  return array
}

let numbers = [3,5,2]
bubbleSort(numbers)
console.log(numbers)


