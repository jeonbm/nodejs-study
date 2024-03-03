// 라우터 만들기
// URL 경로마다 다른흐름으로 넘어가게 하는것

const http = require("http");
const url = require("url");

http.createServer((req,res)=>{

    const path = url.parse(req.url,true).pathname;
    res.setHeader("Content-Type","text/html");
    if(path === "/user"){
        res.end("[user] name : andy , age :30");
    }else if(path === "/feed"){
        res.end(`<ul>
                    <li>pic1</li>
                    <li>pic2</li>
                    <li>pic3</li>
                </ul>`);
    }else{
        res.statusCode = 404;
        res.end(" 404 not found page");
    }
    
}).listen("3000",()=>{console.log("라우터를 만들어보자")});

// http://localhost:3000/ = 404 not found
// http://localhost:3000/user = /user
// http://localhost:3000/feed = /feed