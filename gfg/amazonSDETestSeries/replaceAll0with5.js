function convertFive(num)
{
    if(num === 0) 
        return 0
    
    let s = num.toString();
    let n = "5", ans = '';
    let l = s.length;
    for(let i=0; i<l; i++){
        if(s[i] == '0'){
            ans += n
        }
        else 
            ans += s[i]
    }
   
   return parseInt(ans);

}

console.log(convertFive(1004))