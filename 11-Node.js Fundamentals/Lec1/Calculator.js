const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url !== '/favicon.ico'){
        let urlParts = req.url.split('/');
        console.log(urlParts);
        let result;
        if(urlParts[1] == 'add'){
            result = 0;
            for(let i = 2; i < urlParts.length; i++){
                result += Number(urlParts[i]);
            }
        }else if(urlParts[1] == 'sub'){
            result = urlParts[2];
            for(let i = 3; i < urlParts.length; i++){
                result -= Number(urlParts[i]);
            }
        }else if(urlParts[1] == 'mul'){
            result = 1;
            for(let i = 2; i < urlParts.length; i++){
                result *= Number(urlParts[i]);
            }
        }else if(urlParts[1] == 'div'){
            result = urlParts[2];
            for(let i = 3; i < urlParts.length; i++){
                if( Number(urlParts[i]) == 0)
                    res.write("Can't divide by zero, so we skipped it ...\n");
                else
                    result /= Number(urlParts[i]);
            }
        }else{
            res.write("Invalid Operation !!! .............\n\n we have [add,sub,mul,div] operations ..\n");
        }


        //File handling:
        let operatioString = "";
        
        switch (urlParts[1]){
            case 'add':
                for(let i = 2 ; i < urlParts.length-1; i++ ){
                    operatioString += urlParts[i] + " + ";
                }
                operatioString += urlParts[urlParts.length-1] + " = " + result;
                break;
            case 'sub':
                for(let i = 2 ; i < urlParts.length-1; i++ ){
                    operatioString += urlParts[i] + " - ";
                }
                operatioString += urlParts[urlParts.length-1] + " = " + result;
                break;
            case 'mul':
                for(let i = 2 ; i < urlParts.length-1; i++ ){
                    operatioString += urlParts[i] + " * ";
                }
                operatioString += urlParts[urlParts.length-1] + " = " + result;
                break;
            case 'div':
                for(let i = 2 ; i < urlParts.length-1; i++ ){
                    if(urlParts[i] != "0")
                        operatioString += urlParts[i] + " / ";
                }
                operatioString += urlParts[urlParts.length-1] + " = " + result;
                break;
        }
        fs.appendFile("operations.txt", operatioString + "\n", (err) => {
            if (err) console.log("Error writing to file:", err);
        });
        res.write("Result = " + result);
    }
    res.end();
}).listen(7500);