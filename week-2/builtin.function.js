import process from 'process';
const process = require('process');

console.log(process.argv) //hangi alt klasördeyiz
console.log("Env",process.env);  // ortam
console.log("Development env",process.env.NODE_ENV);

const isDev = process.env.NODE_ENV === 'development';

//console.log(isDev? "Dev ortamındayım debug edebilirim" : "Prod ortamındayım "  );

console.log('PWD',process.cwd);

console.log('Platform',process.platform); // Hangi platform? linux win..

// Operating System
//console.log(os.hostname(),os.cpus(),os.uptime());



