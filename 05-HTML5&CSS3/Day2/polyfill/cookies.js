(function(param){
    param.$c= {
        getCookie:function(cookieName){

            if (arguments.length !== 1) {
                throw new Error("getCookie expects exactly 1 parameter (cookieName).");
            }
            if (typeof cookieName !== "string" || cookieName.trim() === "") {
                throw new Error("Invalid cookieName. It should be a non-empty string.");
            }
            
            var cookiesObject= this.allCookieList();
            for(let i in cookiesObject){
                if(i === cookieName){
                    return cookiesObject[i];
                }
            }
            return '';
        },
        
        setCookie:function(cookieName,cookieValue,expiryDate=0){
            if (arguments.length < 2 || arguments.length > 3) {
                throw new Error("setCookie expects 2 or 3 parameters (cookieName, cookieValue[, expiryDate]).");
            }
            if (typeof cookieName !== "string" || cookieName.trim() === "") {
                throw new Error("Invalid cookieName. It should be a non-empty string.");
            }
            if (typeof cookieValue !== "string") {
                throw new Error("Invalid cookieValue. It should be a string.");
            }
        
            if(expiryDate !== 0){
                document.cookie=cookieName+'='+cookieValue+';expire='+expiryDate;
            }else{
                document.cookie=cookieName+'='+cookieValue;
            }
        },
        
        deleteCookie: function (cookieName){
            if (arguments.length !== 1) {
                throw new Error("deleteCookie expects exactly 1 parameter (cookieName).");
            }
            if (typeof cookieName !== "string" || cookieName.trim() === "") {
                throw new Error("Invalid cookieName. It should be a non-empty string.");
            }
        
        
            document.cookie = cookieName+'=;expire=9-9-2000';
        },
        
        allCookieList:function(){
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
        },
        
        hasCookie:function(cookieName){
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
        },

        prevConflict: function(){
            return $c;
        }
    }

    return $c;
})(this);


