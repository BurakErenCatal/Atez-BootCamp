

function faktoriyel(num) {
    // num bir string ise uyari mesaji goster ve fonksiyondan cik
    if (typeof num !== "number") {
      console.log("Lütfen bir sayi girin.");
      return;
    }
    // num pozitif mi diye kontrol ediyoruz
    if (num < 0) {
      return -1;
    }
    // num 0 veya 1 ise sonucu 1 olarak dondürüyoruz
    else if (num == 0 || num == 1) {
      return 1;
    }
    // num'un faktoriyelini hesapliyoruz
    else {
      let sonuc = 1;
      for (let i = num; i >= 1; i--) {
        sonuc *= i;
      }
      return sonuc;
    }
  }
  
  // ornek kullanim
  faktoriyel("5"); // "Lütfen bir sayi girin."
  faktoriyel(5); // 120
  