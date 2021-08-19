// console.log(__filename);
// console.log(module)

// let john = "john";
// let peter = "peter";

// module.exports = {john,peter}



const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('welcome  to our page')

    }
    if(req.url=='/about'){
        res.end('you are in about page')
    }
    res.end('<h1>oops</h1>')

})
server.listen(5000)