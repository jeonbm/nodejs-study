// 라우터 만들기
// URL 경로마다 다른흐름으로 넘어가게 하는것

const http = require("http");
const url = require("url");

http.createServer((req,res)=>{

    const path = url.parse(req.url,true).pathname;
    res.setHeader("Content-Type","text/html");
    if(path === "/user"){
        user(req,res);
    }else if(path === "/feed"){
        feed(req,res)
    }else{
        notFound(req,res);
    }
    
}).listen("3000",()=>{console.log("라우터를 만들어보자")});

const user = (req,res) => {
    // http://192.168.0.9:3000/user?name=min&age=30
    const userInfo = url.parse(req.url,true).query;
    res.end(`[user] name : ${userInfo.name} , age : ${userInfo.age}`);
}
const feed = (req,res) => {
    res.end(`<ul>
                    <li>pic1</li>
                    <li>pic2</li>
                    <li>pic3</li>
                </ul>`);
}

const notFound = (req,res) => {
    res.statusCode = 404;
        res.end(" 404 not found page");
}

// http://localhost:3000/ = 404 not found
// http://localhost:3000/user = /user
// http://localhost:3000/feed = /feed