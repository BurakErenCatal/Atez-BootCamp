function carp() {
    let sonuc = 1;
    for (let i = 0; i < arguments.length; i++) {
      sonuc *= arguments[i];
    }
    return sonuc;
  }
  let x = 2;
  let y = 3;
  let z = 4;
  let sonuc = carp(x, y, z); // sonuc 24 olacaktır (2 * 3 * 4)
  console.log(sonuc);
    