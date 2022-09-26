const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.setHeader('content-type','text/html');
    res.write("Welcome to node js Leaning...");
    // res.end("Thank you");

    fs.readFile('./Files/test.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);
            // console.log(data.toString());
        }
    })    
});



server.listen(8080);