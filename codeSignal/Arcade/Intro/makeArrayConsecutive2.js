function makeArrayConsecutive2(statues) {
  let minS = 0
	statues.sort((a,b) => b-a)
	
	for (let i=0; i < statues.length -1; i++){
			minS += statues[i] - statues[i+1]-1
	}
  return minS
}