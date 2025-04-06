**Node.js Lab2 content**:

***Task1***:\
Create event module that has on and emit function BONUS 



***Task2***:\
 Create your own module that can be used in flight tickets reservation 
+ Let the flight ticket contains info about  
    - seat num,  
    - flight num,  
    - departure and arrival airports\
    - Travelling date.

+ User can display, get and update info of his ticket

***Task3***:\
Start your http server that handle both GET and POST requests from the client to meet the following scenario :

- Server listen on port 7000 
- Client’s request to localhost:7000/main.html and visit to localhost:7000 ; Get same response where he can enter his name:string, mobile:number, addr:string, email:string within a form .
- The response of this request is a greeting page named welcome.html displaying the following message :

     “Welcome {clientName}, your entered data as follows 
    + MobileNumber : { MobileNumber } 
    +   Email : { MobileNumber } 
    + Address : { MobileNumber } 

-   use html templates in welcome.html page to display client’s info {name}, { addr}, {mobile} and {email} 
- validating entered info before Posting back to the server ie make client-side  
validation 
- client’s entered data should be stored in clients.json 
- welcome.html should contain a button to make an ajax request to get info of all clients stored in clients.json and display it in the proper format  
- apply your own style and make an acceptable UI; implement request handler of your style.css file
