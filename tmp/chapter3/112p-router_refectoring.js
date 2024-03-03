// 라우터 만들기
// URL 경로마다 다른흐름으로 넘어가게 하는것

const http = require("http");
const url = require("url");

http.createServer((req,res)=>{

    const path = url.parse(req.url,true).pathname;
    res.setHeader("Content-Type","text/html");
    if(path in urlMap){
        urlMap[path](req,res);
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

// 매개변수등 만든 함수들이 같은 패턴이 보일경우 맵 자료구조로 구현하는것이 유용하다.
const urlMap = {
    // urlMap이 아래에 있는 이유는 const로 생성된 변수가 초기화 되기전에 호출을 하면 에러가 뜨기 때문 ( 호이스팅 )
    "/":(req,res)=> { res.end("HOME")},
    "/user":user,
    "/feed":feed,
    
}


// http://localhost:3000/ = 404 not found
// http://localhost:3000/user = /user
// http://localhost:3000/feed = /feed