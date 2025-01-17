document.getElementsByTagName("form")[0].onsubmit = function(event){
    let conf = confirm("Do you sure? you wanna submit!...");
    if(conf == false){
        event.preventDefault();
    }
}