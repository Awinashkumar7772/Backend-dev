const http = require('http');
const portNo = 1234;

function processRequest(req, res){
    console.log(`Request received: ${req.url}`)
    switch(req.url){
        case '/favicon.ico':break ;
        case './Employees':res.end("<h1>Employees Management Page");break;
        case '/Customers':res.end("<h1>Customers Management Page");break;
        case '/PayRoll':res.end("<h1>PayRoll Management Page");break;
    }
    }
    
    http.createServer((request, response)=>{
        console.log("Server is started"+ portNo)
        processRequest(request, response)
    }).listen(portNo);
