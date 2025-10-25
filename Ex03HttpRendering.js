const http = require('http');
const fs = require('fs');
const parse = require('url').parse;
const qs = require("querystring");
const path = require('path')

const pNo = 1234;
const root = __dirname

function renderPage(fileName,res){
    const file = path.join(root,fileName);
    fs.createReadStream(file).pipe(res);
}
function handlePost(req,res){
    let inputs = '';
    req.on('data',(result)=>{
        inputs = result.toString();
        console.log(inputs);
    })

    req.on('end',()=>{

        console.log("Now processing the inputs");
        const data = qs.parse(inputs);
        const msg = `<h1>Registration done</h1><p> Welcome ${data.txtName}</p> <p>as given email ${data.txtEmail}</p>`
        res.end(msg);
        return;
    })  
}
function processRequest(req,res){
    if(req.url =='/favicon.ico'){
        return;
    }
    if(req.method =='POST'){
        handlePost(req,res);
        return;
    }
    const inputs = parse(req.url,true).query;
    if(inputs.txtname  !=undefined){
        const msg = `<h1> Registration Successfull</h1><p>Welcome Mr.${inputs.txtname} ${inputs.txtEmail} </p>` 
        res.end(msg);
        return;
    }
    switch(req.url){
    case '/Ex03Registration.html':renderPage('/Ex03Registration.html',res);break;
    default:renderPage("/Ex03ErrorPage.html",res);
    
}

}
http.createServer((req,res)=>{
    processRequest(req,res);
}).listen(pNo)
