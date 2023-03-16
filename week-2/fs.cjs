const fs = require('fs'); //file system

const path = require('path');

//console.log('Path',path.basename);




console.log(fs.exists('newFile.txt',function (exists){

console.log(exists? 'Buldun Onu': 'Bulamadın');



}));

fs.readFile("newFile.txt",'utf8',function(err,data){

console.log('Data',data);

})
