function majorityElement(arr, n)
{
    //your code here
    
    let ans = -1;
    let freq = new Map();
    for (let i = 0; i < n; i++)
    {
        freq[arr[i]]++;
        if(freq.has(arr[i])){
            freq.set(arr[i], freq.get(arr[i]) + 1)
        }else{
            freq.set(arr[i], 1)
        }
 
        if (freq.get(arr[i]) > n / 2)
            ans = arr[i];
    }
    return ans;
}

let a = [3,1,3,3,2];
let b = [1,2,3];
let c = [15]
let d = [1 ,13]


console.log(majorityElement(a, 5)) //3
console.log(majorityElement(b, 3)) //-1
console.log(majorityElement(c, 1)) //15
console.log(majorityElement(d, 2)) //15