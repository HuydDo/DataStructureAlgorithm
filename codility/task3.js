
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//----------------------------
function solution(S, K) {
  // write your code in JavaScript (Node.js 8.9.4)
 const w = S.split(' ')
//  console.log(w.length)
 const checkWordLen = w.some(word => word.length > K)
 if (checkWordLen) return -1;

 let sms = w.shift();
//  console.log(sms)
 let cnt = 1;
 while (w.length){
   const r = w.shift();
   sms += ` ${r}`
  //  console.log(sms)
   if(sms.length > K){
     ++cnt;
     sms = r;
    //  console.log('count: ' + cnt + 'sms: ' + sms)
   }
 }
 return cnt;
}



let S="SMS messages are really short"; 

let K = 12;

console.log(solution(S,K));