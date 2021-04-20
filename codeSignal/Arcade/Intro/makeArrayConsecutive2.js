function makeArrayConsecutive2(statues) {
  let minS = 0
	statues.sort((a,b) => b-a)
	// console.log(statues)
	for (let i=0; i < statues.length -1; i++){
			minS += statues[i] - statues[i+1]-1
	}
  return minS
}
let statues = [4,3,5]
console.log(makeArrayConsecutive2(statues))