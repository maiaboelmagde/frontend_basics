if (
    typeof window.localStorage == 'undefined' ||
    typeof window.sessionStorage == 'undefined'|| true /////Note : true here just for testing
)(function(that){
    var Storage = function(type){
        this.setItem = function(cookieName, cookieValue){
            if(type == 'local'){
                if (arguments.length < 2 || arguments.length > 3) {
                    throw new Error("setCookie expects 2 or 3 parameters (cookieName, cookieValue[, expiryDate]).");
                }
                if (typeof cookieName !== "string" || cookieName.trim() === "") {
                    throw new Error("Invalid cookieName. It should be a non-empty string.");
                }
                if (typeof cookieValue !== "string") {
                    throw new Error("Invalid cookieValue. It should be a string.");
                }

                let date = new Date();
                date.setFullYear(date.getFullYear() + 5);
                document.cookie=cookieName+'='+cookieValue+';expire='+ date.toGMTString();
            }else{  //type == 'session'
                if (arguments.length < 2 || arguments.length > 3) {
                    throw new Error("setCookie expects 2 or 3 parameters (cookieName, cookieValue[, expiryDate]).");
                }
                if (typeof cookieName !== "string" || cookieName.trim() === "") {
                    throw new Error("Invalid cookieName. It should be a non-empty string.");
                }
                if (typeof cookieValue !== "string") {
                    throw new Error("Invalid cookieValue. It should be a string.");
                }

                let date = new Date();
                date.setFullYear(date.getFullYear() + 5);
                document.cookie=cookieName+'='+cookieValue;
            
            }
        }

        this.getItem= function(cookieName){
            if (arguments.length !== 1) {
                throw new Error("getCookie expects exactly 1 parameter (cookieName).");
            }
            if (typeof cookieName !== "string" || cookieName.trim() === "") {
                throw new Error("Invalid cookieName. It should be a non-empty string.");
            }
            
            var cookiesObject= this.getAllItems();
            for(let i in cookiesObject){
                if(i === cookieName){
                    return cookiesObject[i];
                }
            }
            return '';
        }

        this.getAllItems = function(){
            if (arguments.length !== 0) {
                throw new Error("allCookieList expects no parameters.");
            }
            let cookies = document.cookie;
            cookies = cookies.split(';');
            var cookiesObject={};
            var pair;
            for(let i in cookies){
                pair = cookies[i].split('=');
                cookiesObject[pair[0].trim()] = pair[1];
            }
        
            return cookiesObject;
        }

        this.hasCookie = function(cookieName){
            if (arguments.length !== 1) {
                throw new Error("hasCookie expects exactly 1 parameter (cookieName).");
            }
            if (typeof cookieName !== "string" || cookieName.trim() === "") {
                throw new Error("Invalid cookieName. It should be a non-empty string.");
            }
            
            var cookiesObject=this.allCookieList();
        
            for(let i in cookiesObject){
                if(i === cookieName){
                    return true;
                }
            }
            return false;
        }

        this.deleteItem = function (cookieName){
            if (arguments.length !== 1) {
                throw new Error("deleteCookie expects exactly 1 parameter (cookieName).");
            }
            if (typeof cookieName !== "string" || cookieName.trim() === "") {
                throw new Error("Invalid cookieName. It should be a non-empty string.");
            }
        
        
            document.cookie = cookieName+'=;expire=9-9-2000';
        }

    }



    if (typeof window.virtuallocalStorage == 'undefined'){
        //window.localStorage = new Storage('local')
        window.virtuallocalStorage = new Storage('local');
    }
      if (typeof window.virtualsessionStorage == 'undefined'){
        //window.sessionStorage = new Storage('session')
        window.virtualsessionStorage = new Storage('session')
      }
})(this);