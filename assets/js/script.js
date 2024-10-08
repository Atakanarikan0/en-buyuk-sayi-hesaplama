let sayi1 = Number(prompt('1. Sayınızı Giriniz :'));
let sayi2 = Number(prompt('2. Sayınızı Giriniz :'));
let sayi3 = Number(prompt('3. Sayınızı Giriniz :'));

if ((sayi1 > sayi2) && (sayi1 > sayi3)) {
  alert('en büyük sayı : ' + sayi1  + '\nDiğer sayılar : ' + sayi2 + ' ' + sayi3)
}else if ((sayi2 > sayi1) && (sayi2 > sayi3)) {
  alert('en büyük sayı : ' + sayi2   + '\nDiğer sayılar : ' + sayi1 + ' ' + sayi3)
}else if ((sayi3 > sayi1) && (sayi3 > sayi2)) {
  alert('en büyük sayı : ' + sayi3   + '\nDiğer sayılar : ' + sayi1 + ' ' + sayi2)
}else {
  alert('Geçerli komut giriniz.')
}