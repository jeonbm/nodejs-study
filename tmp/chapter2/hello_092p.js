const { log } = require("console");
const http = require("http");
let count = 0;

const server = http.createServer((req,res) => {
    cntLog(count);
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.write("Hello world!\n");
    setTimeout(()=>{
        res.end("Node.js\n");
    },2000);
})

function cntLog(count){
    console.log((count+=1));
}

server.listen(8080);