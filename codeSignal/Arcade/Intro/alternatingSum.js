function alternatingSums(a) {
  let p = [0,0]
  for (let i in a) p[i % 2 == 0 ? 0 : 1] + a[i];
}


a = [50, 60, 60, 45, 70]
alternatingSums(a) // [180, 105].