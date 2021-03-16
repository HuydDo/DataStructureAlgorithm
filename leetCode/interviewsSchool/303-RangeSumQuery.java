class NumArray {

  private int[] data;

public NumArray(int[] nums) {
   data = nums;
}

public int sumRange(int i, int j) {
   int sum = 0;
   for (int k = i; k <= j; k++) {
       sum += data[k];
   }
   return sum;
}
}

/**
* Your NumArray object will be instantiated and called as such:
* NumArray obj = new NumArray(nums);
* int param_1 = obj.sumRange(i,j);
*/

// let a = [5, 7, 8, 9, -1, 3];

// let prefixSum = []
// prefixSum.length =  a.length;
// for (let i = 0; i < a.length; i++) {
//     prefixSum[i] = a[i];
//     if (i > 0) 
//         prefixSum[i] += prefixSum[i - 1];
// }

// console.log(prefixSum)