const express = require("express");
const app = express();
const port = 3000;

let posts = []; // 게시글 저장할 곳 ( 메모리 데이터베이스 )

app.use(express.json()); // json 미들웨어 사용으로 req.body 접근가능
app.use(express.urlencoded({extends:true})); // post요청시 application/x-www-urlencoded 타입인경우 파싱

app.get("/",(req,res)=>{
    // 루트로 접근시
    // posts에 적재된 데이터를 json으로 반환
    res.json(posts);
});

app.post("/posts",(req,res)=>{
    console.log("입력받은값 : "+JSON.stringify(req.body));
    const {title,name,text} = req.body // body속 데이터를 할당
    posts.push({
            id:posts.length,
            title:title,
            name:name,
            text:text,
            createAt:Date()
    });
    res.json({id:posts.length,
        title:title,
        name:name,
        text:text,
        createAt:Date()});
});

app.delete("/posts/:id",(req,res)=>{
    const id = req.params.id;
    const findPost = posts.filter((data)=>
        data.id !== +id // 글 삭제로직
    )
    const checkPostsLength = posts.length !== findPost.length; // 기존길이와 삭제된리스트 길이가 다를경우
    posts = findPost;
    if(checkPostsLength){
        res.json("Delete post!");
        return;
    }
    res.json("Not Delete post!");

});

app.listen(port,()=>{
    console.log("start express server port : "+port);
});


// http://localhost:3000/posts - POST , form encoded , key - value
