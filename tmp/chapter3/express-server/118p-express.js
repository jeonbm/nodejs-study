const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log("start express server port : "+port);
});

// npm i express
// .gitignore add node_modules ( 소스코드만 깃허브에 올라가게 )

// 매개변수에서 _는 필요는하지만 사용은 안할경우였나?
app.get("/",(_,res)=>{
    res.end("HOME");
});
app.get("/user",user);
app.get("/feed",feed);

function user(req,res){
    const userInfo = url.parse(req.url,true).query;
    res.json(`[user] name : ${userInfo.name} , age : ${userInfo.age}`);
}

function feed(req,res){
    res.json(`<ul>
                    <li>pic1</li>
                    <li>pic2</li>
                    <li>pic3</li>
              </ul>`);
}