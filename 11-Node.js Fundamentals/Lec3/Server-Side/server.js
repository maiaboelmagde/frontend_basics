const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 7000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.route("/")
.get((req,res)=>{
    res.send("the server is working .. go to /main");
})
.post((req, res) => {
    res.send("POST request received");
})
.put((req, res) => {
    res.send("PUT request received");
})
.patch((req, res) => {
    res.send("PATCH request received");
})
.delete((req, res) => {
    res.send("DELETE request received");
});


app.route('/main')
.get((req,res)=>{
    res.sendFile(path.join(__dirname,"../Client-Side/main.html"));
});

app.get('/style.css',(req, res)=>{
    res.sendFile(path.join(__dirname,"../Client-Side/style.css"));
});

app.get('/Icons/user.png',(req, res)=>{
    res.sendFile(path.join(__dirname,"../Client-Side/Icons/user.png"));
});
app.get('/Icons/favicon.ico',(req, res)=>{
    res.sendFile(path.join(__dirname,"../Client-Side/Icons/user.png"));
});

app.post('/submit', (req,res)=>{
    const { name, mobile, email, addr } = req.body;

  fs.readFile(path.join(__dirname, "../Client-Side/welcome.html"), 'utf8', (err, html) => {
    if (err) {
      return res.status(500).send("Error loading welcome page.");
    }

    fs.readFile(path.join(__dirname, "clients.json"), 'utf8',(err,clients)=>{
        if (err) {
            console.log("Error while getting clients file ..",err);
        }else{
            let clientList = [];
            
            if(clients.trim().length >0)
                clientList = JSON.parse(clients.toString());

            clientList.push({name,mobile,email,addr});
            fs.writeFile(path.join(__dirname, "clients.json"),JSON.stringify(clientList,null,2),(err)=>{
                if(err)
                    console.log("error while saving clients to the file ...");
                else
                    console.log("Changes saved ..");
            })
        }

    });
    const filledHtml = html
      .replace('{name}', name)
      .replace('{mobile}', mobile)
      .replace('{email}', email)
      .replace('{addr}', addr);

    res.send(filledHtml);
  });
});

app.get('/clients',(req, res)=>{
    fs.readFile(path.join(__dirname,"/clients.json"),'utf-8',(err,clients)=>{
        if(err){
            return res.status(500).send(JSON.stringify({error : "Error loading Clients Info.."}));
        }

        return res.status(200).send(clients);
    }); 
});

app.all('/*params',(req,res)=>{
    res.send(req.url +" is Invalid route !!!!!!!!");
});
app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT+"/main");
});

