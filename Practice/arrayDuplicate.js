// https://codippa.com/how-to-check-if-array-contains-duplicate-values-in-javascript/
// Method 1 Using an Object
// checkDuplicate();
   function checkDuplicate() {
      let arr = ["abc","xy","bb", "axz", "abc"];
      // empty object
      let map = {};
      let result = false;
      for(let i = 0; i < arr.length; i++) {
         // check if object contains entry with this element as key
         if(map[arr[i]]) {
            result = true;
            // terminate the loop
            break;
         }
         // add entry in object with the element as key
         map[arr[i]] = true;
      }
      if(result) {
         console.log('Array contains duplicate elements');
      } else {
         console.log('Array does not contain duplicate elements');
      }
   }

   //Method 2 Using a Set
  //  checkDuplicate2();
   function checkDuplicate2() {
      let arr = ["abc","xy","bb", "abc"];
      let result = false;
      // create a Set with array elements
      const s = new Set(arr);
      // compare the size of array and Set
      if(arr.length !== s.size){
         result = true;
      }
      if(result) {
         console.log('Array contains duplicate elements');
      } else {
         console.log('Array does not contain duplicate elements');
      }
   }

   //Method 3 Comparing the indexes of element
  //  checkDuplicate3();
   function checkDuplicate3(){
      let arr = ["abc","xy","bb", "abc"];
      let result = false;
      // iterate over the array
      for(let i = 0; i < arr.length;i++) {
         // compare the first and last index of an element
         if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
           console.log(arr.lastIndexOf(arr[i]))
            result = true;
            // terminate the loop
            break;
         }
      }
      if(result) {
         console.log('Array contains duplicate elements');
      } else {
         console.log('Array does not contain duplicate elements');
      }
   }
// Method 4: Using some function
  //  checkDuplicate4();
   function checkDuplicate4() {
      let arr = ["abc","xy","bb", "abc"];
      let result = false;
      // call some function with callback function as argument
      result = arr.some((element, index) => {return arr.indexOf(element) !== index});
      if(result) {
         console.log('Array contains duplicate elements');
      } else {
         console.log('Array does not contain duplicate elements');
      }
   }

   // Method 5 Using iteration
   checkDuplicate5();
   function checkDuplicate5(element, index) {
      let arr = ["abc","xy","bb", "abc"];
      for(let i = 0; i < arr.length;i++) {
         // nested loop
         for(let j = 0; j < arr.length;j++) {
            // do not compare same elements
            if(i !== j) {
              // check if elements match
        if(arr[i] === arr[j]){
                 // duplicate element found
           result = true;
                 // terminate inner loop
           break;
        }
            }
         }
         // terminate outer loop
         if(result){
            break;
         }
      }
      if(result) {
         console.log('Array contains duplicate elements');
      } else {
         console.log('Array does not contain duplicate elements');
      }
   }