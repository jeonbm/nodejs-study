// Node.js 백엔드 개발자 되기 86p

console.log("1");
setTimeout(()=>{ // Node.js API - 주어진 시간동안 대기후
    console.log("2");
},1000); // 시간이 끝나면 이벤트루프의 태스크큐로 이동하여 처리가 된다.
console.log("3");