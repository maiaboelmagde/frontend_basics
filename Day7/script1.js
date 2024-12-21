body = document.getElementsByTagName("body")[0];
body.oncontextmenu=function (event){
    console.log("Context Menue Event prevented ....");
    event.preventDefault();
}