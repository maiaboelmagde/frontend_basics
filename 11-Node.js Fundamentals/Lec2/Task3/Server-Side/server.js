const http = require('http');
const fs = require('fs');

let mainHTML = '';
fs.readFile('../Client-Side/main.html',(err,data)=>{
    if(err)
        console.log("There's an error while fetching main.html content");
    else
        mainHTML = data.toString();
});

let styleCSS = '';
fs.readFile('../Client-Side/style.css',(err,data)=>{
    if(err)
        console.log("There's an error while fetching style.css content");
    else
        styleCSS = data.toString();
});

let welcomeHTML = '';
fs.readFile('../Client-Side/welcome.html',(err,data)=>{
    if(err)
        console.log("There's an error while fetching welcome.html content");
    else
        welcomeHTML = data.toString();
});

let clients = [];
fs.readFile('clients.json',(err, data)=>{
    if(err)
        console.log("There's an error while fetching clients.json content");
    else if(data.length > 0){
        clients = JSON.parse(data.toString());
    }
});

http.createServer((req,res)=>{
    switch (req.method) {
        case 'GET':
            switch (req.url) {
                case '/':
                case '/main.html':
                    res.writeHead(200, { 'Content-Type': 'text/html' }); 
                    res.write(mainHTML);
                    res.end();
                    break;
                case '/style.css':
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.write(styleCSS);
                    res.end();
                    break;
                case '/submit':
                    res.writeHead(200, { 'Content-Type': 'text/html' }); 
                    res.write(welcomeHTML);
                    res.end();
                    break;

                case '/clients':
                    fs.readFile('clients.json', (err, data) => {
                        if (err) {
                            res.writeHead(500, {'Content-Type': 'application/json'});
                            res.write(JSON.stringify({ error: "Failed to load clients" }));
                            res.end();
                        } else {
                            res.writeHead(200, {'Content-Type': 'application/json'});
                            res.write(data);
                            res.end();
                        }
                    });
                    break;
                default:
                    res.writeHead(404);
                    res.write(`Can't found this  Route`);
                    break;
            }
            break;
        case 'POST':
            switch (req.url){
                case '/submit':
                    let newWelcomeHTML = welcomeHTML;

                    req.on('data',(data)=>{
                        let myData = data.toString().split('&');
                        let ClientData = {};
                        myData.forEach(element => {
                            let [key, value] = element.split('=');
                            ClientData[key] = decodeURIComponent(value.replace(/\+/g, ' '));
                        });
                        console.log(ClientData);

                        newWelcomeHTML = welcomeHTML
                            .replace('{name}', ClientData.name/*.replace('+'," ")*/)
                            .replace('{mobile}', ClientData.mobile)
                            .replace('{email}', ClientData.email/*.replace('%40','@')*/)
                            .replace('{addr}', ClientData.addr);

                        
                        clients.push(ClientData);
                        fs.writeFile('clients.json', JSON.stringify(clients, null, 2), (err) => {
                            if (err) {
                                console.log("Error writing to clients.json", err);
                            } else {
                                console.log("Client data saved!");
                            }
                        });

                    });

                    req.on('error',(err)=>{
                        console.log(err);
                    });

                    req.on('end',()=>{
                        res.setHeader("content-type", "text/html");
                        res.write(newWelcomeHTML);
                        res.end();
                    });
                    break;
                default:
                    res.writeHead(404);
                    res.write(`Can't find this post route...`);
                    res.end();
                    break;
            }
           
            break;
        case 'PATCH':
            res.end();
            break;
        case 'PUT':
            res.end();
            break;
        case 'DELETE':
            res.end();
            break;
        default:
            res.write("Invalid Method");
            res.end();
            break;
    }
}).listen(7000,()=>{
    console.log("http://localhost:7000/");
});