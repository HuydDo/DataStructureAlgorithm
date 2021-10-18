function thirdLargest(a, n)
    {
        //your code here
        if(a.length < 3)
            return -1
        a.sort((a,b)=>a-b);
        //a
        let i = n-3;
        return a[i];
    }

  //  console.log(thirdLargest([2,4,1,3,5],5)) //3
   console.log(thirdLargest([18,21,10,24,27,5],6))