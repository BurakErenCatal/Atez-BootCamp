const url = require('url');
//const websiteUrl = "http://www.atez.com.tr:8080/?timezone=en&lang=en";
const websiteUrl = "http://www.atez.com.tr:8080/about";
const websiteUrlEN = "http://www.atez.com.tr:8080/en/about";

const urlParams = url.parse(websiteUrl);
const urlParamsEn = url.parse(websiteUrlEN);
console.log(urlParams);
console.log('EN',urlParamsEn);

// Ödev => en de ru 

//queryystring?
// http://www.atez.com.tr:8080/ru/ankara
// http://www.atez.com.tr:8080/ru/depo-antrupo
// http://www.atez.com.tr:8080/en/bekleyen-ilanlar

// verilen url de hangi dil kullanılmış onu yazdır 
// ru en de kısmı gibi..
