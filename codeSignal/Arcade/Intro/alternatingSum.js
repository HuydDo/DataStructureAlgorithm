function alternatingSums(a) {
  let p = [0,0]
  for (let i in a) {
    // console.log("i = " + i + " i % 2 = " + i % 2);
    p[i % 2 == 0 ? 0 : 1] += a[i];
    }
    return p
}


a = [50, 60, 60, 45, 70]
let ans = alternatingSums(a)// [180, 105].
console.log(ans)
