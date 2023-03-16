const http =require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req,res) =>{

    res.writeHead(200, {'Content-Type0': 'text/html'})
   // throw Error('hata');
    res.write('Server is alive');
    res.end();
   


}).listen(1856);


/*
http.createServer((req,res)=>{
 const pathQuery =url.parse(req.url,true);
 const fileName = '.${pathQuery.pathname}';
 fs.readFile(fileName,(err,data)=>{
if(err){

}

 }

})



*/

//200 başarılı
//201 oluşturuldu