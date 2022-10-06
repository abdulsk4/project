const http=require("http");
const fs=require("fs");

// fs.readFile("home.html",(err,home)=>{
//     console.log(home.toString());
// });

let homeContent="";
let projectContent="";
let registerContent="";
const port=require('minimist')(process.argv.slice(2));

fs.readFile("home.html",(err,home)=>{
    if(err){
        throw err;
    }
    homeContent=home;
});

fs.readFile("project.html",(err,project)=>{
    if(err){
        throw err;
    }
    projectContent=project;
});

fs.readFile("registration.html",(err,register)=>{
    if(err){
        throw err;
    }
    registerContent=register;
});

http.createServer((request,response)=>{
    let url=request.url;
    response.writeHeader(200,{"content-type":"text/html"});
    switch(url){
        case "/project":
            response.write(projectContent);
            response.end();
            break;
        case "/registration":
            response.write(registerContent);
            response.end();
            break;
        default:
            response.write(homeContent);
            response.end();
            break;
    }
}).listen(port.port);