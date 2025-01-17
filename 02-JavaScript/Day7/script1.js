body = document.getElementsByTagName("body")[0];
body.oncontextmenu=function (event){
    document.write("Context Menue Event prevented ....");
    event.preventDefault();
}